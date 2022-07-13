import { motion } from 'framer-motion'
import { useState } from 'react'
import swal from 'sweetalert'
import { storage } from "../../../firebase/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const ListModalAdd = ({ closeModal }) => {
    const [titleId, setTitleId] = useState('')
    const [titleEn, setTitleEn] = useState('')
    const [descId, setDescId] = useState('')
    const [descEn, setDescEn] = useState('')
    const [image, setImage] = useState('')
    const [url, setURL] = useState('');

    const [error, setError] = useState([])
    const [progress, setProgress] = useState(0);

    // initialize firebase

    const handleSubmit = (e) => {
        e.preventDefault()
        let token = localStorage.getItem("token")
        if (image === '') {
            // image Validation
            setError('Image Required for Highlights')
            swal({
                icon: 'error',
                text: 'Image required for Highlights information', error,
                timer: '2000'
            })
        } else {
            // Pass image validation
            // upload to firebase
            const storageRef = ref(storage, image.name)
            const uploadFirebase = uploadBytesResumable(storageRef, image)

            uploadFirebase.on("state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                error => {
                    console.log("error firebase", error);
                    swal({
                        icon: 'error',
                        title: error,
                        timer: '5000'
                    })
                }, () => {
                    getDownloadURL(uploadFirebase.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL)
                        setURL(downloadURL)

                        const value = {
                            'title_id': titleId,
                            'description_id': descId,
                            'title_en': titleEn,
                            'description_en': descEn,
                            'image': downloadURL,
                        }
                        fetch('https://staging.javaagroglobalindo.com/highlights/create', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                "Authorization": `Bearer ${token}`
                            },
                            body: JSON.stringify(value)
                        })
                            .then((response) => {
                                return response.json()
                            }).then((data) => {
                                if (data.message === 'Success') {
                                    swal({
                                        title: "Success!",
                                        text: "Product berhasil ditambahkan!",
                                        icon: "success",
                                        timer: 3000
                                    });
                                    closeModal(false)
                                } else {
                                    swal({
                                        icon: 'error',
                                        title: data.message,
                                        timer: '5000'
                                    })
                                    console.log('something went wrong', data)
                                }
                            }).catch((error) => {
                                swal({
                                    icon: 'error',
                                    title: error,
                                    timer: '3000'
                                })
                            })
                    })
                })
        }
    }

    return (
        <div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <motion.div
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1
                    }}
                    className="relative w-auto my-6 mx-auto max-w-xs md:max-w-xl xl:max-w-3xl">
                    {/*content*/}
                    <motion.div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <motion.div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Product Highlight
                            </h3>
                            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => closeModal(false)}>
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </motion.div>
                        {/*body*/}
                        <motion.div className="relative p-6 flex-auto">
                            <form className="w-96">
                                <div className="mb-3 grid grid-cols-1">
                                    <label >Slider Title in ID</label>
                                    <input
                                        type="text"
                                        name="title_id"
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400"
                                        onChange={e => { setTitleId(e.target.value) }}
                                    />
                                    <label >Slider Title</label>
                                    <input
                                        type="text"
                                        name="title_en"
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400"
                                        onChange={e => { setTitleEn(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3 grid grid-cols-1">
                                    <label>Description in ID</label>
                                    <textarea
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400" onChange={e => { setDescId(e.target.value) }}></textarea>
                                    <label>Description in EN</label>
                                    <textarea
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400" onChange={e => { setDescEn(e.target.value) }}></textarea>
                                </div>
                                <div className="mb-3">
                                    <input type="file" name="image" onChange={e => { setImage(e.target.files[0]) }} />

                                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                                        <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                                <button className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-blue-400" onClick={handleSubmit}>Submit</button>
                            </form>
                        </motion.div>
                        {/*footer*/}
                        <motion.div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => closeModal(false)}>
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div className="opacity-25 fixed inset-0 z-40 bg-black"></motion.div>
        </div >
    )
}

export default ListModalAdd