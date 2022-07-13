import React, { useState, useEffect } from "react";
import Posts from "../../component/smallComponent/post";
import Pagination from "../../component/smallComponent/pagination";
import axios from "axios";
import MiddleImage from "../../component/asset/middleImage.png";
import Navbar from "../../component/pageComponent/Navbar/Navbar";
import Footer from "../../component/smallComponent/footer";

const Traininglist = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-black m-0">
      <Navbar />
      <img
        src={MiddleImage}
        className="w-full pt-5 pb-10 opacity-70 xl:h-auto md:h-auto sm:h-96"
      />
      <div className=" text-white text-center opacity-80 font-bold md:text-3xl xl:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-xl">
        “Work Hard try hard pay hard and be something”
      </div>

      <h1 className="text-gray font-bold text-center text-4xl mt-12 mb-8">
        Trainer List
      </h1>
      <Posts posts={currentPosts} loading={loading} className="my-3" />
      <div className="flex justify-center mt-10 -mx-5 mb-10">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Traininglist;
