import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeItem from "../components/HomeItem";
import { Outlet } from "react-router-dom";
import FetchItem from "../components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItem></FetchItem>
      {console.log(fetchStatus)}
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      {console.log(fetchStatus)}
      <Footer />
    </>
  );
}

export default App;
