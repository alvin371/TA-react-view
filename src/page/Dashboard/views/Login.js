
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = {
            'email': email,
            'password': password,
        }
        fetch('https://staging.javaagroglobalindo.com/user/login', {
            'email': email,
            'password': password,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value)
        })
            .then((response) => {
                return response.json()
            }).then((data) => {
                if (data.message === 'Success') {
                    localStorage.setItem('token', data.data.token)
                    localStorage.setItem('email', data.data.email)
                    swal({
                        title: "Welcome!",
                        text: "You are Login into Dashboard as Admin!",
                        icon: "success",
                        timer: 3000
                    });
                    setTimeout(() => {
                        history(`/dashboard`);
                    }, 2000)
                } else {
                    swal({
                        icon: 'error',
                        title: 'Username and Password cannot be Found!',
                        timer: '5000'
                    })
                    console.log('something went wrong')
                }
            }).catch((error) => {
                console.log(error)
                swal({
                    icon: 'error',
                    title: 'Username and Password cannot be Found!',
                    timer: '3000'
                })
            })
        // setRedirect(true)
    };
    return (

        <div className="container mx-auto my-64">
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Java Agroglobalindo</h2>
                    <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Hi Admin! Welcome Back</h3>
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login to Dashboard Menu</p>
                    <form onSubmit={handleSubmit}>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="email" placeholder="Email Address" aria-label="Email Address" onChange={e => { setEmail(e.target.value) }} />
                        </div>
                        <div className="w-full mt-4">
                            <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="password" placeholder="Password" aria-label="Password" onChange={e => { setPassword(e.target.value) }} />
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <button className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none" type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Ask Administrator For Login Information</span>
                </div>
            </div>
        </div>
    );
}

export default Login;