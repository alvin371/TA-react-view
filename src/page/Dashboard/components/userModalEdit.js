import { motion } from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
const ListModalEdit = ({ open, id, email, name, onClose }) => {
    const [emailUser, setEmailUser] = useState('')
    const [userName, setuserName] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        let token = localStorage.getItem("token")

        const value = {
            'email': emailUser,
            'name': userName,
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
            })

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
                                Edit User Data
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
                                    <label >Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400" defaultValue={email} onChange={e => { setEmailUser(e.target.value) }}
                                    />
                                </div>
                                <div className="mb-3 grid grid-cols-1">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="mt-2 w-64 md:w-full px-4 py-2 rounded-xl border border-gray-300 outline-none  focus:border-gray-400" defaultValue={name} onChange={e => { setuserName(e.target.value) }}
                                    />
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