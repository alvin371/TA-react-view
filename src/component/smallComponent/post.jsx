import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="mt-6 mx-4 justify-center grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-4 rounded-2xl lg:w-96 border-2 border-white relative opacity-60 hover:opacity-100"
        >
          <div className=" w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={post.download_url}
              alt={post.author}
              className="mx-auto p-4 justify-center w-full h-full object-center rounded-full object-cover lg:w-80 lg:h-full"
            />
          </div>
          <h3 className=" text-lg text-center my-3 md:text-2xl text-white ">{post.author}</h3>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-white">
                <a href="/">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {post.author}
                </a>
              </h3>
              <p className="mt-1 text-sm text-white">red</p>
            </div>
            <p className="text-sm font-medium text-white">look</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
