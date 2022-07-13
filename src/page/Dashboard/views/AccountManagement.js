import Sidebar from "./../components/Sidebar.js"
import ModalsAdd from "../components/userModalAdd"
import ModalsEdit from "../components/userModalEdit"
import ModalsEditPassword from "../components/userModalEditPassword"
import { useState, useEffect } from 'react'
import axios from "axios"
import swal from 'sweetalert'
import { useNavigate, Navigate } from "react-router-dom"

const AccountManagement = () => {

    const [modalEdit, setModalEdit] = useState(false)
    const [modalEditPassword, setModalEditPassword] = useState(false)
    const [modalAdd, setModalAdd] = useState(false)
    const [data, setData] = useState([]);
    const fetch = async () => {
        try {
            const res = await axios.get("https://staging.javaagroglobalindo.com/user", {
                withCredentials: false
            })
            setData(res.data.data)
            // setLoading(true)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        fetch()
    }, [data]);

    // Sending Data into Modals
    const [tempData, setTempData] = useState([])
    const getData = (email, name) => {
        let tempData = [email, name]
        console.log("ini tempData", tempData);
        setTempData(item => [1, ...tempData])
        return setModalEdit(true)
    }

    // Sending Data into Modals Edit Password
    const [editPassowrd, seteditPassowrd] = useState([])
    const getDataPassword = (id) => {
        console.log("ini id", id);
        let editPassowrd = [id]
        seteditPassowrd(item => [1, ...editPassowrd])
        return setModalEditPassword(true)
    }
    let navigate = useNavigate()

    const email = localStorage.getItem('email')
    const token = localStorage.getItem('token')
    if (email !== 'admin@javaagroglobalindo.com') {
        swal({
            icon: 'error',
            text: "You havent authority to that page"
        })
        return <Navigate to="/dashboard" replace />;
    } else if (token === null) {
        swal({
            icon: 'error',
            text: "You need Login First"
        })
        return <Navigate to="/login" replace />;
    }
    return (
        <div>
            <Sidebar />
            {modalEdit && <ModalsEdit closeModal={setModalEdit} />}
            {modalEditPassword && <ModalsEdit closeModal={setModalEditPassword} />}
            {modalAdd && <ModalsAdd closeModal={setModalAdd} />}
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
                            Product List
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
                                                User Account
                                            </h3>
                                        </div>
                                        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                            <button
                                                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                                onClick={() => setModalAdd(true)}
                                            ><i className="fas fa-plus mr-3"></i>
                                                Add User Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="block w-full overflow-x-auto">
                                    {/* Projects table */}
                                    <table className="items-center w-full bg-transparent border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left w-1/12">
                                                    No
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                    Email
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                    Name
                                                </th>
                                                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                    Remark
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && (data.map((item, i) => (

                                                <tr key={i}>
                                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                        {i + 1}
                                                    </th>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {item.Email}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                        {item.Name}
                                                    </td>
                                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
                                                        <button className="text-white bg-green-500 px-6 py-2 mr-5 rounded-full hover:bg-green-400" onClick={() => getData(item.email, item.name)}>Edit User</button>
                                                        <button className="text-white bg-yellow-500 px-6 py-2 mr-5 rounded-full hover:bg-red-400" onClick={() => getDataPassword(item.id)}>Edit Password</button>
                                                    </td>
                                                    {/* Modals dipanggil lagi guna mengirim data, urutan data sesuai dengan tempData */}
                                                    <ModalsEdit open={modalEdit} onClose={() => setModalEdit(false)} id={tempData[1]} email={tempData[2]} name={tempData[3]} >
                                                        {item.id}
                                                    </ModalsEdit>
                                                    <ModalsEditPassword open={modalEditPassword} onClose={() => setModalEditPassword(false)} id={tempData[1]} >
                                                        {item.id}
                                                    </ModalsEditPassword>
                                                </tr>
                                            )))}
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

export default AccountManagement