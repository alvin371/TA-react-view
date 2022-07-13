import React, { useContext, useState, useEffect } from "react";
import Navbar from "../../../component/pageComponent/Navbar/Navbar";
import Footer1 from "../../../component/smallComponent/footer";
import { fetchPosts } from '../../../store/modules/posts/actions/postsAction';
import { useSelector, useDispatch } from "react-redux";

import NewsCard from "./newsCard";
import Pagination from "../../../component/smallComponent/pagination";
// import { fetchPosts } from '../../store/modules/posts/actions/postsAction';

const NewsPage = () => {
  // const [data, setData] = useState([]);
  // const apiKey = "32e8942831bc4b54854ebca687eb1d61";

  // useEffect(() => {
  //   axios
  //     .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
  //     .then((response) => setData(response.data.articles))
  //     .catch((error) => console.log(error));
  // }, []);
  const postsSelector = useSelector((state) => state.PostsState);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const dispatch = useDispatch();

  // console.log("this is the post state: ", postsSelector)

  const getPosts = () => dispatch(fetchPosts());

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const data = postsSelector.posts.data
  console.log(data)
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <div
        className=" bg-cover bg-no-repeat bg-inherit	h-screen pb-20"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")`,
        }}
      >
        <Navbar />
      </div>
      <div className="justify-center space-y-10">
        <div className=" text-white text-center opacity-80 font-bold md:text-3xl xl:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-xl hover:opacity-100">
          Find Latest News From Different World
        </div>
      </div>

      {/* <!-- Late Post --> */}
      <div className="mx-10">
        <div className="flex mx-auto">
          <h1 className="relative inline-block font-bold text-4xl corner mx-auto my-20 text-center text-gray-dark">
            NEWS
          </h1>
        </div>

        <NewsCard post={currentPosts} />
        <div className="flex justify-center mt-10 -mx-5 ">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data?.length}
            paginate={paginate}
          />
        </div>
      </div>
      <Footer1 />
    </div>
  )
}

export default NewsPage;
