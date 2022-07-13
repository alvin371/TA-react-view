import Sidebar from "./../components/Sidebar.js"
import ModalsYoutubeEdit from "../components/youtubeModalsEdit.js"
import ModalsYoutubeDelete from "../components/youtubeModalsDelete.js"

import ModalsOwnerEdit from "../components/ownerModalsEdit.js"
import ModalsOwnerDelete from "../components/ownerModalsDelete.js"

import ModalsTestiAdd from "../components/testiModalsAdd.js"
import ModalsTestiEdit from "../components/testiModalsEdit.js"
import ModalsTestiDelete from "../components/testiModalsDelete.js"

import image from './../assets/img/giphy.gif'
import { useState } from 'react'

const HomePage = () => {
    // youtube
    const [modalsYoutubeEdit, setModalYoutubeEdit] = useState(false)
    const [modalsYoutubeDelete, setModalYoutubeDelete] = useState(false)
    // owner quot
    const [modalsOwnerEdit, setModalOwnerEdit] = useState(false)
    const [modalsOwnerDelete, setModalOwnerDelete] = useState(false)
    // testimonial
    const [modalTestiAdd, setModalTestiAdd] = useState(false)
    const [modalTestiEdit, setModalTestiEdit] = useState(false)
    const [modalTestiDelete, setModalTestiDelete] = useState(false)
    return (
        <div>
            {/* Youtube */}
            {modalsYoutubeEdit && <ModalsYoutubeEdit closeModal={setModalYoutubeEdit} />}
            {modalsYoutubeDelete && <ModalsYoutubeDelete closeModal={setModalYoutubeDelete} />}
            {/* Owner */}
            {modalsOwnerEdit && <ModalsOwnerEdit closeModal={setModalOwnerEdit} />}
            {modalsOwnerDelete && <ModalsOwnerDelete closeModal={setModalOwnerDelete} />}
            {/* Testimonial */}
            {modalTestiAdd && <ModalsTestiAdd closeModal={setModalTestiAdd} />}
            {modalTestiEdit && <ModalsTestiEdit closeModal={setModalTestiEdit} />}
            {modalTestiDelete && <ModalsTestiDelete closeModal={setModalTestiDelete} />}
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
                            Home Page Informations
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

                {/* underconstruction Page */}
                <div class="overflow-x-hidden">
                    <div class="py-12 animate-marquee whitespace-nowrap ">
                        <span class="mx-4 text-xl font-bold text-red-500">This Page Still Under Construction</span>
                        <span class="mx-4 text-xl font-bold text-red-500">This Page Still Under Construction</span>
                        <span class="mx-4 text-xl font-bold text-red-500">This Page Still Under Construction</span>
                        <span class="mx-4 text-xl font-bold text-red-500">This Page Still Under Construction</span>
                        <span class="mx-4 text-xl font-bold text-red-500">This Page Still Under Construction</span>
                    </div>
                </div>
                <img src={image} alt="" className="w-90 h-auto text-center flex justify-center mx-auto mb-10" />
                {/*<div className="px-4 md:px-10 mx-auto w-full -m-24">
                    <div className="flex flex-wrap">
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                <div className="rounded-t mb-0 px-4 py-3 border-0">
                                    <div className="flex flex-wrap items-center">
                                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                            <h3 className="font-semibold text-base text-blueGray-700">
                                                Youtube Video
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    <table className="items-center w-full bg-transparent border-collapse table-auto">
                                        <thead>
                                            <tr>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                    Link Youtube Video
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                    Title Section
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                    Description
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                    Remark
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs w-20 p-4">
                                                    https://www.youtube.com/watch?v=m17WVyGy3dc
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs w-20 p-4">
                                                    img/product_1.jpg
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 break-all">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores sapiente voluptatibus non, totam aliquam eligendi culpa reprehenderit eos voluptatum et suscipit ducimus sunt nobis provident, eius expedita voluptates nesciunt.
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 flex justify-between">
                                                    <button className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-green-400" onClick={() => setModalYoutubeEdit( true )}>Edit</button>
                                                    <button className="text-white bg-red-500 px-6 py-2 rounded-full hover:bg-red-400" onClick={() => setModalYoutubeDelete( true )}>Delete</button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                        <h3 className="font-semibold text-base text-blueGray-700">
                                            Owner Quot
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse table-auto">
                                    <thead>
                                        <tr>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                Owner Image
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                Quotes
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                Description
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                Remark
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs w-20 p-4">
                                                https://www.youtube.com/watch?v=m17WVyGy3dc
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs w-20 p-4">
                                                img/product_1.jpg
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 break-all">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asperiores sapiente voluptatibus non, totam aliquam eligendi culpa reprehenderit eos voluptatum et suscipit ducimus sunt nobis provident, eius expedita voluptates nesciunt.
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 flex justify-between">
                                                <button className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-green-400" onClick={() => setModalOwnerEdit(true)}>Edit</button>
                                                <button className="text-white bg-red-500 px-6 py-2 rounded-full hover:bg-red-400" onClick={() => setModalOwnerDelete(true)}>Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div className="rounded-t mb-0 px-4 py-3 border-0">
                                <div className="flex flex-wrap items-center">
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                        <h3 className="font-semibold text-base text-blueGray-700">
                                            Testimonial
                                        </h3>
                                    </div>
                                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                        <button
                                            className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            style={{ transition: "all .15s ease" }}
                                            onClick={() => setModalTestiAdd(true)}
                                        ><i className="fas fa-plus mr-3"></i>
                                            Add Testimonial
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse table-auto">
                                    <thead>
                                        <tr>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                No
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left w-6/12">
                                                Testimonial
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                Rates
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                Name
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                From
                                            </th>
                                            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                                Remark
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs w-20 p-4">
                                                1
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs w-20 p-4">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla soluta hic adipisci voluptatem similique accusantium quibusdam, fugit quasi, voluptates quam perspiciatis consequuntur quidem nostrum veniam quaerat iure ipsum laboriosam.
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 break-all">
                                                1/5
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 break-all">
                                                Alvin Dimas
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 break-all">
                                                Serawak, Malaysia
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 flex justify-between">
                                                <button className="text-white bg-green-500 px-6 py-2 rounded-full hover:bg-green-400" onClick={() => setModalTestiEdit(true)}>Edit</button>
                                                <button className="text-white bg-red-500 px-6 py-2 rounded-full hover:bg-red-400" onClick={() => setModalTestiDelete(true)}>Delete</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div> 
                    </div>
                </div>*/}
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
        // </div>
    )
}

export default HomePage