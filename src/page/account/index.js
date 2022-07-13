import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   // updateUserAvatar,
//   updateUser
//   // deleteUser,
// } from "../../store/modules/auth/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import {storage} from "../../firebase/firebase"

const Account = () => {
  const currentUserState = useSelector((state) => state.Auth);
  const user=currentUserState.currentUser
  console.log(currentUserState)
  console.log(user)
  // const [image, setImage] = useState("");
  // const [editState, setEditState] = useState(false);
  // const [progress, setProgress] = useState(0);
  // const formHandler = (e) => {
  //   e.preventDefault();
  //   const file = e.target[0].files[0];
  //   uploadFiles(file);
  // };
  // const uploadFiles = (file) => {
  //   //
  //   if (!file) return;
  //   const sotrageRef = ref(storage, `files/${file.name}`);
  //   const uploadTask = uploadBytesResumable(sotrageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const prog = Math.round(
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //       );
  //       setProgress(prog);
  //     },
  //     (error) => console.log(error),
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         console.log("File available at", downloadURL);
  //         setUser({...user,
  //           new_avatar:downloadURL})
  //       });
  //     }
  //   );
  // };
  // const openEdit = () => {
  //   setEditState(!editState);
  //   console.log(currentUserState.currentUser)
  // };

  // const dispatch = useDispatch();

  // // const userUpdate = (userDetails) =>
  // //   dispatch(updateUser(userDetails, clearInput));
  // const clearInput = () => {
  //   setUser({
  //     ...user,
  //     new_name: "",
  //     new_goals: "",
  //     new_avatar: "",
  //   });
  // };

  // const [user, setUser] = useState({
  //   email: currentUserState.currentUser.email,
  //   membership: currentUserState.currentUser.membership,
  //   role: currentUserState.currentUser.role,
  //   new_name: "",
  //   new_goals: "",
  //   new_avatar: "",
  // });

  // const handleChange = (e) => {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const submitUser = (e) => {
  //   e.preventDefault();
  //   userUpdate({
  //     email: user.email,
  //     name: user.name,
  //     membership: user.membership,
  //     role: user.role,
  //     goals: user.new_goals,
  //     avatar: user.new_avatar,
  //   });
  // };

  return (
    <>
      <div className="text-center p-6  border-b">
        <img
          className="h-24 w-24 rounded-full mx-auto"
          src={user.avatar}
          alt={user.username}
        />
        <p className="pt-2 text-lg font-semibold">
          {user.username}
        </p>
        <p className="text-sm ">
          {currentUserState.email}
          </p>
        <div className="mt-4">
          <Link
            to="/user/edited"
            className="border rounded-full py-2 px-4 text-xs font-semibold text-white bg-red hover:bg-red-dark"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <div className= "border-b">
       
        <a href="#" className="mt-2 px-4 py-2 hover:bg-gray flex">
          <div className="text-gray-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
              Membership Status
            </p>
            <p className="text-xs text-gray-500">
              {user.membership}
            </p>
          </div>
        </a>
        <a href="#" className="px-4 py-2 hover:bg-gray flex">
          <div className="text-gray-800">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">Role</p>
            <p className="text-xs text-gray-500">
              {user.role}
            </p>
          </div>
        </a>
        <a href="#" className="px-4 py-2 mb-2 hover:bg-gray flex">
          <div>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />{" "}
            </svg>
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">Goals</p>
            <p className="text-xs text-gray-500">
              {user.goals}
            </p>
          </div>
        </a>
        
        {/* <div classNameName={editState ? "" : "hidden"}>
          <form onSubmit={submitUser}>
            <div className="mb-4">
              <label className="block text-md font-light mb-2" for="new_name">
                Name
              </label>
              <input
                className="w-full bg-drabya-gray border-gray appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="new_name"
                value={user.new_name}
                onChange={handleChange}
                placeholder="name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-light mb-2" for="new_goals">
                Goals
              </label>
              <input
                className="w-full bg-drabya-gray border-gray appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="new_goals"
                onChange={handleChange}
                value={user.new_goals}
                placeholder="goals"
              />
            </div>
            <div className="mb-4">
              <form onSubmit={formHandler}>
                <input
                  // allows you to reach into your file directory and upload image to the browser
                  type="file"
                />
                <button classNameName="bg-green-jade w-20" type="submit">Upload images</button>
              </form>
              <h2>Uploading done {progress}%</h2>
            </div>
            <div className="flex items-center justify-between mb-5">
              <button
                className="bg-blue hover:bg-blue-dark text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </>
  );
};

export default Account;
