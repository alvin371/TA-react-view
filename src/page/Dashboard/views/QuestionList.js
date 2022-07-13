import Sidebar from "./../components/Sidebar.js";
import image from './../assets/img/giphy.gif'
import { useNavigate, Navigate } from "react-router-dom";
import swal from 'sweetalert'
const QuestionList = () => {
    let token = localStorage.getItem("token")
    let navigate = useNavigate()

    if (token === null) {
        swal({
            icon: 'error',
            text: "You need Login First"
        })
        return <Navigate to="/login" replace />;
    }
    return (
        <div>
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
                            Email
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
                                                Email
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="block w-full overflow-x-auto">
                                    <table className="items-center w-full bg-transparent border-collapse table-fixed">
                                        <thead>
                                            <tr>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left w-1/12">
                                                    No
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                    Question
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left w-4/12">
                                                    Name
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left w-4/12">
                                                    Email
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                    1
                                                </th>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    Bricket Coco
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 overflow-auto">
                                                    Alvin Dimas Satria
                                                </td>
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 overflow-auto">
                                                    alvindimas8@gmail.com
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <img src="" alt="" />
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
    </div>*/}
            </div>
        </div >
    );
}

export default QuestionList;