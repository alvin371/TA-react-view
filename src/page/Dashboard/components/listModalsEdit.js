import { motion } from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { storage } from "../../../firebase/firebase"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
const ListModalEdit = ({ open, id, name_id, name_en, desc_id, desc_en, category, image, onClose }) => {
    const [idName, setIdName] = useState('')
    const [enName, setEnName] = useState('')
    const [descriptionId, setDescriptionId] = useState('')
    const [descriptionEn, setDescriptionEn] = useState('')
    const [itemCategory, setItemCategory] = useState('')
    const [itemImage, setItemImage] = useState('')
    const [url, setURL] = useState('');
    const [progress, setProgress] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault()
        let token = localStorage.getItem("token")
        // jika image tidak di update, maka hanya update data saja, tidak perlu firebase
        if (itemImage === '') {
            const value = {
                'name_id': idName,
                'description_id': descriptionId,
                'name_en': enName,
                'description_en': descriptionEn,
                'category': itemCategory,
                'image': image,
            }
            console.log(value);

            // url https://staging.javaagroglobalindo.com/products/edit/
            const editData = axios.patch(`https://staging.javaagroglobalindo.com/products/edit/${id}`, value, {
                withCredentials: false,
                headers: {
                    Authorization: token
                }
            })
                .then((data) => {
                    console.log(data)
                    if (data.data.message === 'Success') {
                        swal({
                            title: "Success!",
                            text: "Product berhasil di Edit!",
                            icon: "success",
                            timer: 3000
                        });
                        onClose()
                    } else {
                        swal({
                            icon: 'error',
                            title: 'error!',
                            timer: '5000'
                        })
                        console.log('something went wrong', data)
                    }
                }).catch((error) => {
                    console.log(error)
                    swal({
                        icon: 'error',
                        title: error,
                        timer: '3000'
                    })
                })

            console.log(editData);
        } else {
            // jika image terisi, maka upload ke firebase
            // upload to firebase
            const storageRef = ref(storage, itemImage.name)
            const uploadFirebase = uploadBytesResumable(storageRef, itemImage)

            uploadFirebase.on("state_changed",
                snapshot => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                error => {
                    console.log("error firebase", error);
                }, () => {
                    getDownloadURL(uploadFirebase.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL)
                        setURL(downloadURL)

                        const value = {
                            'name_id': idName,
                            'description_id': descriptionId,
                            'name_en': enName,
                            'description_en': descriptionEn,
                            'category': itemCategory,
                            'image': downloadURL,
                        }
                        axios.patch(`https://staging.javaagroglobalindo.com/products/edit/${id}`, value, {
                            withCredentials: false,
                            headers: {
                                Authorization: token
                            },
                        })
                            .then((data) => {
                                if (data.message === 'Success') {
                                    swal({
                                        title: "Success!",
                                        text: "Product berhasil di Edit!",
                                        icon: "success",
                                        timer: 3000
                                    });
                                    onClose()
                                } else {
                                    swal({
                                        icon: 'error',
                                        title: data.message,
                                        timer: '5000'
                                    })
                                    console.log('something went wrong', data)
                                }
                            }).catch((error) => {
                                console.log(error)
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
    if (!open) return null
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
                                Edit Product List
                            </h3>
                            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={onClose}>
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </motion.div>
                        {/*body*/}
                        <motion.div className="relative p-6 flex-auto">
                            <form className="w-96">
                                <div className="mb-3 grid grid-cols-1">
                                    <label >Product Name in ID</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400" defaultValue={name_id} onChange={e => { setIdName(e.target.value) }}
                                    />
                                    <label >Product Name in EN</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400" defaultValue={name_en} onChange={e => { setEnName(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3 grid grid-cols-1">
                                    <label>Product Description in ID</label>
                                    <textarea
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400" onChange={e => { setDescriptionId(e.target.value) }} defaultValue={desc_id}></textarea>
                                    <label>Product Description in EN</label>
                                    <textarea
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400" onChange={e => { setDescriptionEn(e.target.value) }} defaultValue={desc_en}></textarea>
                                </div>
                                <div className="mb-3 grid grid-cols-1">
                                    <label>Product Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400" defaultValue={category} onChange={e => { setItemCategory(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3">
                                    <img src={image} alt="" width='50px' height='50px' />
                                    <input type="file" name="image" onChange={e => { setItemImage(e.target.files[0]) }} />
                                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
                                        <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                                <button className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-blue-400" onClick={handleSubmit}>Edit</button>
                            </form>
                        </motion.div>
                        {/*footer*/}
                        <motion.div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={onClose}>
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

export default ListModalEdit