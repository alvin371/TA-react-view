import React, { useState, useRef } from "react";
import {
  // updateUserAvatar,
  updateUser,
  // deleteUser,
} from "../../store/modules/auth/actions/authAction";
import Logo from "../../component/asset/Logo.png";
import SideImg from "../../component/asset/sidebargym.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/firebase";

const EditedAccount = () => {
  const currentUserState = useSelector((state) => state.Auth);

  const user1 = currentUserState.currentUser
  console.log(user1)
  // const [image, setImage] = useState("");

  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  const userUpdate = (userDetails) =>
    dispatch(updateUser(userDetails, clearInput));
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };
  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUser({ ...user, new_avatar: downloadURL });
        });
      }
    );
  };

  const clearInput = () => {
    setUser({
      ...user,
      new_name: "",
      new_goals: "",
      new_avatar: "",
    });
  };

  const [user, setUser] = useState({
    new_name: "",
    new_goals: "",
    new_avatar: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name + e.target.value);
  };
  const submitUser = (e) => {
    e.preventDefault();
    userUpdate({
      name: user.new_name,
      goals: user.new_goals,
      avatar: user.new_avatar,
    });
  };
  if (!currentUserState.isAuthenticated) {
    return <Navigate to="/" />;
  }

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
          <img className="h-20 w-52 mx-auto my-1" src={Logo} alt="Logo" />
          <h1 className="text-center text-white mt-3 font-bold text-2xl">
            Account Update
          </h1>
          <form onSubmit={submitUser}>
            <div className="mt-5 mb-4">
              
              <img className="w-32 h-32 rounded-full mx-auto" src={user1.avatar} />
              <label className="block text-md text-white font-medium mb-2" for="username">
                Avatar
              </label>
              <input
                className="shadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outlineshadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outline"
                value={user1.avatar}
                type="text"
              />
              
            </div>
          
            <div className=" mb-4">
              <label className="block text-md text-white font-medium mb-2" for="username">
                Username
              </label>
              <input
                className="shadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outlineshadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="username"
                value={user1.username}
                // onChange={handleChange}
                placeholder="Username"
                disabled
              />
            </div>
            <div className="mt-3 mb-4">
              <label className="block text-md text-white font-medium mb-2" for="email">
                Email
              </label>
              <input
                className="shadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outlineshadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="email"
                value={user1.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="mt-3 mb-4">
              <label className="block text-md text-white font-medium mb-2" for="role">
                Role
              </label>
              <input
                className="shadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outlineshadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="role"
                value={user1.role}
                onChange={handleChange}
                placeholder="Role"
                disabled
              />
            </div>
            <div className="mb-4">
              <label className="block text-md text-white font-medium mb-2" for="new_goals">
                Goals
              </label>
              <input
                className="shadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outlineshadow appearance-none border bg-white text-black rounded w-full py-2 px-3  mt-1 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="new_goals"
                onChange={handleChange}
                value={user1.goals}
                placeholder="Goals"
              />
            </div>
            <div className="mb-4 text-blue-500">
              <h2>Uploading done {progress}%</h2>
            </div>
            <div className="flex items-center justify-center mb-5">
              <button
                className="bg-red-400 rounded-lg text-white font-bold text-lg hover:bg-red-500 p-2 mt-8 cursor-pointer"
                type="submit"
              >
                Submit
              </button>
            </div>
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

export default EditedAccount;
