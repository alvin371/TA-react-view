import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { SignIn } from "../../store/modules/auth/actions/authAction";
import Logo from "../../component/asset/Logo.png"

const Login = () => {
  const currentState = useSelector((state) => state.Auth);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const userLogin = (credentials) => dispatch(SignIn(credentials));

  const baseError = {
    username: "",
    password: "",
  };
  const [errorMassage, setErrorMassage] = useState(baseError);


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
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

  const handleSubmit = async (e) => {
    if (errorMassage.password !== "" || errorMassage.username !== "") {
      alert(`Data Pendaftar Tidak Sesuai`);
      e.preventDefault();
    } else {
      e.preventDefault();
      userLogin({
        username: user.username,
        password: user.password,
      });
    }
  };

  if (currentState.isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="w-full  h-screen flex flex-wrap bg-black">
      <div className="w-2/5 shadow-2xl">
        <div className="flex absolute justify-center m-2 md:justify-start md:-mb-24">
          <Link
            to="/"
            className="hidden md:block text-white font-bold text-4xl"
          >
            FITNESS
          </Link>
        </div>
        <img
          className="object-cover w-full opacity-60 h-screen hidden md:block"
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
      </div>
      <div className="w-full md:w-3/5 flex flex-col">
        <div className="flex flex-col  justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <Link to="/">
            <img className="h-20 w-52 mx-auto my-1" src={Logo} alt="Logo" />
          </Link>
          <h1 className="text-center text-white mt-3 font-bold text-2xl">
            Welcome Back
          </h1>
          <div className="space-x-4 mt-2 text-center">
            <h2 className="inline-block text-white font-bold text-xl">
              Sign In
            </h2>
            <h2 className="inline-block text-white font-bold text-xl">|</h2>
            <Link
              className="inline-block text-gray-300 hover:text-white font-bold text-xl"
              to="/sign-up"
            >
              Sign Up
            </Link>
          </div>
          <form
            className="flex flex-col w-80 mx-auto md:pt-8"
            onSubmit={handleSubmit}
          >
            {/* error login catch no record */}
            <div className="mb-2">
              {currentState.loginError &&
                currentState.loginError.Incorrect_details ? (
                <small className="color-red">
                  {currentState.loginError.Incorrect_details}
                </small>
              ) : (
                ""
              )}
              {currentState.loginError && currentState.loginError.No_record ? (
                <small className="color-red">
                  {currentState.loginError.No_record}
                </small>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col pt-4">
              <input
                required
                type="text"
                name="username"
                placeholder="username"
                value={user.email}
                onChange={handleChange}
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {currentState.loginError && currentState.loginError.Invalid_email ? (
              <small className="text-red-500">{currentState.loginError.Invalid_email}</small>
            ) : (
              ""
            )}
            <div className="flex flex-col pt-4">
              <input
                required
                type="password"
                name="password"
                value={user.password}
                placeholder="Password"
                className="shadow appearance-none border bg-black border-white text-white rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
              />
            </div>
            {currentState.loginError && currentState.loginError.Invalid_password ? (
              <small className="text-red-500">{currentState.loginError.Invalid_password}</small>
            ) : (
              ""
            )}
            {currentState.loginError && currentState.loginError.Incorrect_password ? (
              <small className="text-red-500">{currentState.loginError.Incorrect_password}</small>
            ) : (
              ""
            )}

            <ul className="mt-3">
              {Object.keys(errorMassage).map((key) => {
                if (errorMassage[key] !== "") {
                  return (
                    <li className="text-red text-sm" key={key}>
                      {errorMassage[key]}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            <input
              type="submit"
              value="Submit"
              className="bg-red-400 rounded-lg text-white font-bold text-lg hover:bg-red-500 p-2 mt-8 cursor-pointer"
            />
          </form>
          <Link
            className="text-center pt-3 text-white hover:text-gray hover:underline "
            to="/sign-up"

          >
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
