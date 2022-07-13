import "./index.css";
import * as React from "react";
import {
  Login,
  Register,
  Membership,
  HomePage,
  TrainerList,
  BookOnline,
  NewsPage,
  BookOffline,
  NewsDetail,
  Videos,
  EditedAccount
} from "./page";

import Dashboard from "./page/Dashboard/views/Dashboard.js";
import LoginDashboard from "./page/Dashboard/views/Login.js";
import Product from "./page/Dashboard/views/Product.js";
import ProductHighlights from "./page/Dashboard/views/ProductHighlights.js";
import Sidebar from "./page/Dashboard/components/Sidebar.js";
import Faq from "./page/Dashboard/views/Faq.js";
import QuestionList from "./page/Dashboard/views/QuestionList.js";
import AccountManagement from "./page/Dashboard/views/AccountManagement.js";
// import HomePage from "./page/Dashboard/views/HomePage.js";

import { Route, Routes, Navigate } from "react-router-dom";
const App = () => {
  return (
    <Routes>
      <Route path="/"
        exact
        element={<HomePage />}
      />
      <Route path="/trainer-list" exact element={<TrainerList />} />
      <Route path="/sign-in" exact element={<Login />} />
      <Route path="/sign-up" exact element={<Register />} />
      {/* <Route path="/account" exact element={<SignUp />} /> */}
      <Route
        path="/membership"
        exact
        element={<Membership />}
      />
      <Route path="/online-class" exact element={<BookOnline state={"online"} />} />
      <Route path="/offline-class" exact element={<BookOffline />} />
      <Route path="content/news" exact element={<NewsPage />} />
      <Route path="/news-detail" exact element={<NewsDetail />} />
      <Route path="/videos" exact element={<Videos />} />
      <Route path="/user/edited" exact element={<EditedAccount />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
export default App;
