import React from "react";
import Navbar from "../../component/pageComponent/Navbar/Navbar";
import Footer from "../../component/smallComponent/footer";
import Logo from "../../component/asset/Logo.png";

const membership = () => {
  return (
    <div>
      <div className="space-y-20">
        <div
          className=" bg-cover bg-no-repeat bg-inherit	h-screen pb-20"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
          }}
        >
          <Navbar />
        </div>
        <div className=" text-white text-center opacity-80 font-bold md:text-3xl xl:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-xl">
          “I strongly believe that through dedication and perseverance, one can
          overcome adversity to achieve success. ”
        </div>
        <div className="flex mx-auto">
          <h1 className="uppercase mt-10 mb-2 relative inline-block font-bold text-4xl corner mx-auto text-center text-gray-dark">
            Membership
          </h1>
        </div>
        <div className="rounded-xl mx-10 sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray bg-gray lg:bg-white lg:h-full">
          <div className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
            <img className="my-4 h-10" src={Logo} alt="Workcation logo" />
            <img
              className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
              src="https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="Ad- woman on a beach"
            />
            <h1 className="mt-5 font-bold text-lg lg:mt-7">
              Get your membership right now
            </h1>
            <h1 className="mb-4 font-semibold text-lg text-red-dark">
              Get started today!
            </h1>
            <h1 className="text-md font-medium text-gray-dark text-justify pt-2">
              What you got

            </h1>
            <ol className="font-medium space-y-1">
              <li>1. Access to all className</li>
              <li>2. Make a className appointment</li>
              <li>3. And anything else</li>
            </ol>
            <button className="mt-5 bg-red py-3 px-6 shadow-2xl rounded-xl bg-red-500 text-white font-bold">
              Get Membership
            </button>

          </div>

          <div className="hidden relative lg:block  lg:col-span-3">
            <img
              className="absolute inset-0 w-full h-full xl:w-5/6 object-cover object-center"
              src="https://images.unsplash.com/photo-1574680088814-c9e8a10d8a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
              alt="Ad- woman on a beach"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default membership;
