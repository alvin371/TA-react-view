import { motion } from 'framer-motion'

const listModalDelete = ( { closeModal } ) => {
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
                                Testimonial
                            </h3>
                            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => closeModal( false )}>
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </motion.div>
                        {/*body*/}
                        <motion.div className="relative p-6 flex-auto">
                            <div className="mb-5">
                                <p>
                                    Do you want to delete this item?
                                </p>
                            </div>
                            <div className="flex justify-evenly">
                                <button className="text-white bg-yellow-500 px-6 py-2 rounded-full hover:bg-black">Yes</button>
                                <button className="text-white bg-gray-500 px-6 py-2 rounded-full hover:bg-black" >No</button>
                            </div>
                        </motion.div>
                        {/*footer*/}
                        <motion.div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => closeModal( false )}>
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

export default listModalDelete