import { motion } from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { storage } from "../../../firebase/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const ListModalAdd = ({ closeModal }) => {
    const [idName, setIdName] = useState('')
    const [enName, setEnName] = useState('')
    const [descriptionId, setDescriptionId] = useState('')
    const [descriptionEn, setDescriptionEn] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [url, setURL] = useState('');
    const [error, setError] = useState([])
    const [progress, setProgress] = useState(0);

    // initialize firebase

    const handlerSubmit = (e) => {
        e.preventDefault()
        let token = localStorage.getItem("token")
        if (image == '') {
            // image Validation
            setError('Image Required for Products')
            swal({
                icon: 'error',
                text: 'Image required for Products information',
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
                            'name_id': idName,
                            'description_id': descriptionId,
                            'name_en': enName,
                            'description_en': descriptionEn,
                            'category': category,
                            'image': downloadURL,
                        }
                        fetch('https://staging.javaagroglobalindo.com/products/create', {
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
                                Add Product List
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
                                    <label >Product Name in Indonesia</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400"
                                        onChange={e => { setIdName(e.target.value) }}
                                    />
                                    <label >Product Name in English</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400"
                                        onChange={e => { setEnName(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3 grid grid-cols-1">
                                    <label>Product Description in Indonesia</label>
                                    <textarea onChange={e => { setDescriptionId(e.target.value) }}
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400"></textarea>
                                    <label>Product Description in English</label>
                                    <textarea onChange={e => { setDescriptionEn(e.target.value) }}
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400"></textarea>
                                </div>
                                <div className="mb-3 grid grid-cols-1">
                                    <label>Product Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        onChange={e => { setCategory(e.target.value) }}
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="file" name="image" onChange={e => { setImage(e.target.files[0]) }} />

                                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                                        <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                                <button onClick={handlerSubmit} className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-blue-400">Submit</button>

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