import Sidebar from "./../components/Sidebar.js"
import ModalsEdit from "../components/faqModalsEdit.js"
import ModalsAdd from "../components/faqModalsAdd.js"
import ModalsDelete from "../components/faqModalsDelete.js"
import { useState } from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import swal from "sweetalert";

const Faq = () => {
    const [modalEdit, setModalEdit] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [modalDelete, setModalDelete] = useState(false)
    return (
        <div>
            {modalEdit && <ModalsEdit closeModal={setModalEdit} />}
            {modalAdd && <ModalsAdd closeModal={setModalAdd} />}
            {modalDelete && <ModalsDelete closeModal={setModalDelete} />}
            <Sidebar />
            <div className="relative md:ml-64 bg-blueGray-100">
                {/* Navbar */}
                <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
                    <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                        {/* Brand */}
                        <a
                            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                            Frequently Asked Question
                        </a>
                    </div>
                </nav>
                {/* End Navbar */}
                {/* Header */}
                <div className="relative bg-pink-600 md:pt-32 pb-32 pt-12">
                    <div className="px-4 md:px-10 mx-auto w-full">
                        <div>
                        </div>
                    </div>
                </div>
                <div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className="flex flex-wrap">
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
                            {/* Project Big Table */}
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                <div className="rounded-t mb-0 px-4 py-3 border-0">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                            <h3 className="font-semibold text-base text-blueGray-700">
                                                FAQ
                                            </h3>
                                        </div>
                                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                            <button
                                                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                                onClick={() => setModalAdd(true)}
                                            ><i className="fas fa-plus mr-3"></i>
                                                Add FAQ
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    {/* Projects table */}
                                    <table className="items-center w-full bg-transparent border-collapse table-fixed">
                                        <thead>
                                            <tr>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left w-1/12">
                                                    No
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left w-4/12">
                                                    Question
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left w-8/12">
                                                    Answer
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left w-2/12">
                                                    Remark
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                    1
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    why?
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 overflow-auto">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores sapiente voluptatibus non, totam aliquam eligendi culpa reprehenderit eos voluptatum et suscipit ducimus sunt nobis provident, eius expedita voluptates nesciunt.
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex justify-between">
                                                    <button className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-green-400" onClick={() => setModalEdit(true)}>Edit</button>
                                                    <button className="text-white bg-red-500 px-6 py-2 rounded-full hover:bg-red-400" onClick={() => setModalDelete(true)}>Delete</button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="block pt-12">
                        <div className="container mx-auto px-4">
                            <hr className="mb-4 border-b-1 border-blueGray-200" />
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-4/12 px-4">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        Copyright © {new Date().getFullYear()}{" "}
                                        <a
                                            href="https://www.creative-tim.com"
                                            className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                                        >
                                            Java Agroglobalindo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Faq