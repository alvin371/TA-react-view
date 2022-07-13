import React, { useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import Logo from "../../component/asset/Logo.png";
import SideImg from "../../component/asset/sidebargym.jpg";
import { useSelector, useDispatch } from "react-redux";

import { SignUp } from "../../store/modules/auth/actions/authAction";

const Register = () => {
  const currentState = useSelector((state) => state.Auth);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const baseError = {
    email: "",
    username: "",
    password: "",
  };
  const dispatch = useDispatch();
  const addUser = (credentials) => dispatch(SignUp(credentials));
  const [errorMassage, setErrorMassage] = useState(baseError);
  const regexNama = /^[A-Za-z ]*$/;
  const regexEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
      if (!regexNama.test(value)) {
        setErrorMassage({
          ...errorMassage,
          [name]: "Nama Lengkap Harus Berupa Huruf",
        });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }
    if (name === "email") {
      if (!regexEmail.test(value)) {
        setErrorMassage({ ...errorMassage, [name]: "Email Tidak Sesuai" });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }
    if (name === "password") {
      if (value.length < 8) {
        setErrorMassage({
          ...errorMassage,
          [name]: "password kurang dari 8 karakter",
        });
      } else {
        setErrorMassage({ ...errorMassage, [name]: "" });
      }
    }
    setUser({
      ...user,
      [name]: value,
    });
  };
  if (currentState.isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (e) => {
    if (errorMassage.username !== "" || errorMassage.email !== "") {
      alert(`user Pendaftar Tidak Sesuai`);
    } else {
      alert(`tidak ada eror input`);
      e.preventDefault();
      addUser({
        username: user.username,
        email: user.email,
        password: user.password,
      });
    }
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen flex flex-wrap bg-black">
      <div className="w-2/5 shadow-2xl">
        <div className="absolute justify-center hidden md:block m-2 md:justify-start md:-mb-24">
          <Link to="/" className=" text-white font-bold text-4xl">
            FITNESS
          </Link>
        </div>
        <img
          className="object-cover w-full opacity-60 h-screen hidden md:block"
          src={SideImg}
        />
      </div>
      <div className="w-full md:w-3/5 flex flex-col">
        <div className="flex flex-col  justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <Link to="/">
            <img className="h-20 w-52 mx-auto my-1" src={Logo} alt="Logo" />
          </Link>
          <h1 className="text-center text-white mt-3 font-bold text-2xl">
            Welcome
          </h1>
          <div className="space-x-4 mt-2 text-center">
            <h2 className="inline-block text-white font-bold text-xl">
              Sign Up
            </h2>
            <h2 className="inline-block text-gray-100 font-bold text-xl">|</h2>
            <Link
              className="inline-block text-gray-300 hover:text-white font-bold text-xl"
              to="/sign-in"
            >
              Sign In
            </Link>
          </div>

          <form
            className="flex flex-col w-80 mx-auto md:pt-8"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col pt-4">
              <input
                required
                type="text"
                name="username"
                placeholder="username"
                value={user.username}
                onChange={handleChange}
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
              {currentState.signupError &&
                currentState.signupError.Taken_username ? (
                <small className="text-red">
                  {currentState.signupError.Taken_username}
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="email"
                required
                name="email"
                placeholder="@ email"
                value={user.email}
                onChange={handleChange}
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
              {currentState.signupError &&
                currentState.signupError.Invalid_email ? (
                <small className="text-red">
                  {currentState.signupError.Invalid_email}
                </small>
              ) : (
                ""
              )}
              {currentState.signupError &&
                currentState.signupError.Taken_email ? (
                <small className="text-red">
                  {currentState.signupError.Taken_email}
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col pt-4">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
              {currentState.signupError &&
                currentState.signupError.Invalid_password ? (
                <small className="text-red">
                  {currentState.signupError.Invalid_password}
                </small>
              ) : (
                ""
              )}
            </div>
            {/* <div className="flex flex-col pt-4">
              <input
                type="number"
                name="phone_number"
                value={user.phone_number}
                onChange={handleChange}
                placeholder="Confirmation password"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div> */}
            <ul>
              {Object.keys(errorMassage).map((key) => {
                if (errorMassage[key] !== "") {
                  return (
                    <li className="text-red" key={key}>
                      {errorMassage[key]}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {currentState.isLoading ? (
              <button
                disabled
                className="bg-white rounded-lg text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer hover:bg-gray-dark"
              >
                register....
              </button>
            ) : (
              <input
                type="submit"
                value="Submit"
                className="bg-white rounded-lg text-black font-bold text-lg hover:bg-gray-700 p-2 mt-8 cursor-pointer hover:bg-gray-dark"
              />
            )}
          </form>
          <Link
            className="text-center pt-3 text-white hover:text-gray hover:underline"
            to="/sign-in"
          >
            Back Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
