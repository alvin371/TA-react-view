import React, { useState, useEffect } from "react";
import Navbar from "../../../component/pageComponent/Navbar/Navbar";
import Footer1 from "../../../component/smallComponent/footer";
import Search from "../../../component/smallComponent/search";
import Pagination from "../../../component/smallComponent/pagination";
import Card from "../../../component/smallComponent/cardClasses";
import TestimonyBest from "../../../component/smallComponent/testimonyBest";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsOnline } from "../../../store/modules/classOnline/actions/classAction";

const BookOnline = ({ state }) => {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);
  // // const [link,setLink]=useState("https://picsum.photos/v2/list?page=2&limit=100")

  // // useEffect(() => {
  // //   const fetchPosts = async () => {

  // //     setLoading(true);
  // //     if(state==="offline"){
  // //       setLink("https://picsum.photos/v2/list?page=4&limit=100")
  // //     }
  // //     const res = await axios.get(link
  // //     );
  // //     console.log(link);

  // //     setPosts(res.data);
  // //     setLoading(false);
  // //   };

  // //   fetchPosts();
  // // }, []);

  // // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const posts = useSelector((state) => state.ClassState);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const dispatch = useDispatch();
  const getPosts = () => dispatch(fetchPostsOnline());
  useEffect(() => {
    getPosts();
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const data = posts.posts.data;
  console.log("checking posts");
  console.log(posts.posts.data);
  console.log(data);
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);
  console.log(posts.posts);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
      <div
        className=" bg-cover bg-no-repeat bg-inherit	h-screen pb-20"
        style={{
          backgroundImage:
            `url("https://images.unsplash.com/photo-1598136490941-30d885318abd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80")`,
        }}
      >
        <Navbar />
      </div>
      <div className="justify-center space-y-10">
        <div className=" text-white text-center opacity-80 font-bold md:text-3xl xl:text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-xl hover:opacity-100">
          Search Class
          <div>
            <Search state={state} />
          </div>
        </div>
        <div className="flex mx-auto">
          <h1 className="uppercase mt-10 mb-2 relative inline-block font-bold text-4xl corner mx-auto text-center text-gray-dark">
            {state} Workout
          </h1>
        </div>
        <Card
          posts={currentPosts}
          // loading={loading}
          state="online"
          className="my-3"
        />
        <div className="flex justify-center mt-10 -mx-5 ">
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
        <div className="flex mx-auto">
          <h1 className="uppercase mt-10 mb-2 relative inline-block font-bold text-4xl corner mx-auto text-center text-gray-dark">
            Testimony
          </h1>
        </div>
      </div>
      <TestimonyBest />
      <Footer1 />
    </>
  );
};

export default BookOnline;
