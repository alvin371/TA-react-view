
import Navbar from "../../component/pageComponent/Navbar/Navbar";
// import React, { useState, useRef } from "react";
import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import {storage} from "../../firebase/firebase"


const HomePage = ({ auth, setAuth }) => {
  //uji
  // const [image,setImage]=useState("")
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
  //         setImage(downloadURL)
  //       });
  //     }
  //   );
  // };


  return (
    <div
      className=" bg-scroll bg-cover bg-no-repeat bg-inherit	h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80")`,
      }}
    >
      <Navbar auth={auth} setAuth={setAuth} />
      <div className="absolute xl:w-2/5 lg:w-2/5 md:w-4/5 sm:w-4/5 xl:top-1/4 lg:top-1/4 sm:top-1/3 ml-10 xl:space-y-6 lg:space-y-6 mr-3">
        <div className="xl:text-6xl lg:text-4xl sm:text-2xl text-white font-bold ">
          SET SOME GOALS, THEN DEMOLISH THEM
        </div>
        <div className="mb-2 xl:text-4xl lg:text-2xl sm:text-xl text-white font-semibold ">
          Landing page of beast gym
        </div>
        <div className=" my-2 xl:text-xl lg:text-lg sm:text-sm text-white xl:font-medium lg:font-medium sm:font-normal ">
          It's time you changed your perception of Gold's Gym. We've spent over
          50 years defining fitness and now we're reinventing it. With personal
          fitness profiles, both traditional and digital personal training
          options and diverse group exercise class offerings all delivered in a
          supportive
        </div>
        {/* uji coba */}
        {/* <form onSubmit={formHandler}>
          <input
            // allows you to reach into your file directory and upload image to the browser
            type="file"
          />
          <button type="submit">Upload</button>
        </form>
        <h2>Uploading done {progress}%</h2>
        <img src={image} alt="image tag" /> */}
        {/* // allows you to reach into your file directory and upload image to the browser */}
        <Button
          variant="contained"
          size="large"
          className=" mt-2 font-semibold bg-red-500 text-white"
        >
          <Link to="/sign-in">Get Started</Link>
        </Button>
        <Stack spacing={2} direction="row" className="justify-start">
          <IconButton color="primary" aria-label="delete">
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add an alarm">
            <InstagramIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <FacebookIcon />
          </IconButton>
        </Stack>
      </div>
    </div>
  );
};

export default HomePage;
