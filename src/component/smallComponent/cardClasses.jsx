import React from "react";
import CardActions from "@mui/material/CardActions";
import Modal from "../../component/smallComponent/modal";
import ModalOnline from "../../component/smallComponent/modalOnline";
const cardClasses = ({ posts, loading, state }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  var but_style =
    "rounded-xl bg-red-500 mx-auto font-semibold mb-1 text-white hover:text-gray hover:bg-red-600";

  return (
    <div className="holder space-x-2 mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {posts && (posts.map((post) => (
        <div key={post.id} className="rounded-xl each mb-10 m-2 shadow-lg border-gray-dark bg-white relative focus:ring-blue hover:shadow-2xl hover:border-blue">
          <img
            className="rounded-t-xl w-full xl:h-52 lg:h-44 md:h-32 sm"
            src={post.image}
            alt=""
          />
          <div className="badge absolute top-0 right-0 bg-red m-2 text-white p-1 px-2 text-xs font-bold rounded">
            {post.time}
          </div>
          <div className="info-box text-xs flex justify-between p-1 font-medium text-white bg-gradient-to-r from-red-dark to-red ">
            <span className="mr-1 p-1 px-2 font-bold">{post.participan} Participan</span>
            <span className={state != "online" ? "text-white border-l mr-1 p-1 px-2 font-medium" : "text-green-jade border-l mr-1 p-1 px-2 font-medium"}>
              {state}
            </span>
          </div>

          <div className="desc p-4 text-gray-dark">
            <a
              href="https://www.youtube.com/watch?v=dvqT-E74Qlo"
              target="_new"
              className="title text-center font-bold block cursor-pointer hover:underline"
            >
              {post.name}
            </a>
            <p className="text-sm text-gray-400 ">
              {post.short_desc}
            </p>
            <div>
              <span className="description text-sm text-black font-semibold block py-2 ">
                Capacity :
              </span>
              <span className="description text-sm text-gray-dark font-medium block">
                {post.capacity}
              </span>
              <span className="description text-sm text-black font-semibold block py-2 ">
                Monthly Fee :
              </span>
              <span className="description text-sm text-gray-dark font-medium block">
                Rp. {post.monthly_fee}
              </span>
              <CardActions>
                <div className="mx-auto">
                  {state === "offline" ? <Modal but_style={but_style} post={post} /> : <ModalOnline but_style={but_style} post={post} />}
                </div>
              </CardActions>
            </div>
          </div>
        </div>
      )))}
    </div>
  );
};

export default cardClasses;
