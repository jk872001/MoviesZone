import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getConfiguration } from "./Redux/slices/homeSlice";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults.jsx";
Home
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetchDataFromApi("/movie/latest").then((result) => {
      // console.log(result);
      dispatch(getConfiguration(result));
    });
  };
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/search/:query" element={<SearchResults/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
