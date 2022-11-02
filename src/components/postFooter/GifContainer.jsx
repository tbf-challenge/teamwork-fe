import axios from "axios";
import React, { useEffect, useState } from "react";
import cancel from "../../Assets/images/cancel.svg";
import load from "../../Assets/images/loading.gif";
import { GifDisplayContainer } from "./postFooter.styled";

const GifContainer = ({ displayTenor, removeTenor, handleSelectedGif }) => {
  // eslint-disable-next-line
  const [gifArray, setGifArray] = useState([]);
  // eslint-disable-next-line
  const [categoryArray, setcategoryArray] = useState([]);
  // eslint-disable-next-line
  const [oneCategory, setOneCategory] = useState([]);
  const apikey = "AIzaSyCa4-1xZzD8bFenw_A53rzELEmXXSqlQAM";
  const clientkey = "my_test_app";

  const searchResults = document.querySelector(".searchResults");
  // Function to  display search results
  const showResults = gifArray.map((aGif) => {
    console.log();
    const src = aGif.media_formats?.nanogif?.url;
    return (
      <img key={aGif.id} className="preview_gif search" id={aGif.media_formats?.mediumgif?.url} src={aGif ? src : load} alt="" />
    );
  });

  // Function to take in the search results and send a request to the api
  const searchTenor = async (e) => {
    const lmt = 10;
    const searchValue = e.target.value;
    const category = document.querySelector(".categoriesSection");
    const singleCategory = document.querySelector(".singleCategory");
    // Showing the results container if and only if you're currently searching.
    // That way we can show categories on that page by default
    if (searchValue) {
      searchResults.style.transform = "translateX(0%)";
      category.style.transform = "translateX(105%)";
      singleCategory.style.transform = "translateX(105%)";
    } else if (!searchValue) {
      searchResults.style.transform = "translateX(105%)";
      category.style.transform = "translateX(0%)";
    }
    const searchUrl = `https://tenor.googleapis.com/v2/search?q=${searchValue}&key=${apikey}&client_key=${clientkey}&limit=${lmt}`;
    try {
      const res = await axios.get(searchUrl, {
        method: "GET",
        headers: { Authorization: apikey }
      });
      // Adding the info from the API to an array state
      setGifArray(res?.data?.results);
      // showResults();
    } catch (error) {
      console.log(error);
    }
  };
  // eslint-disable-next-line
  const getACategory = async (e) => {
    const singleCategory = document.querySelector(".singleCategory");
    const link = e.target.id;
    const url = `https://tenor.googleapis.com${link.substr(0, 11)}key=${apikey}&${link.substr(11)}&limit=10`;
    try {
      const res = await axios.get(url, {
        method: "GET",
        headers: { Authorization: apikey }
      });
      const data = res?.data?.results;
      setOneCategory(data);
      // console.log(oneCategory);
    } catch (error) {
      console.log(error);
    }
    singleCategory.style.transform = "translateX(0%)";
  };
  // Function to show the category list
  const getCategories = async () => {
    const catList = ["ok", "clapping", "excited", "hungry", "good luck", "stressed", "bored", "annoyed", "bye", "surprised"];
    // eslint-disable-next-line
    // const catUrl = "https://tenor.googleapis.com/v2/categories?key=" + apikey + "&client_key=" + clientkey;
    const catUrl = `https://tenor.googleapis.com/v2/categories?key=${apikey}&client_key="${clientkey}`;
    try {
      const res = await axios.get(catUrl, {
        method: "GET",
        headers: { Authorization: apikey }
      });
      let categories = res?.data?.tags;
      categories = categories.filter(({ searchterm }) => catList.includes(searchterm));
      // console.log(categories);
      setcategoryArray(categories);
    } catch (error) {
      console.log(error);
    }
  };
  const showACategory = oneCategory && oneCategory?.map((aGif) => {
    const src = aGif.media_formats?.nanogif?.url;
    return (
      // eslint-disable-next-line
      <img key={aGif.id} className="preview_gif aCategory" onClick={handleSelectedGif} id={aGif.media_formats?.mediumgif?.url} src={aGif ? src : load} alt="" />
    );
  });
  const closeAcategory = () => {
    const singleCategory = document.querySelector(".singleCategory");
    singleCategory.style.transform = "translateX(105%)";
  };
  const displayCategories = categoryArray?.map(({
    image, searchterm, path, name
  }) => {
    // eslint-disable-next-line
    let newName = searchterm[0].toUpperCase().concat("", searchterm.substr(1));
    return (
      // eslint-disable-next-line
      <li className="cat_link" onClick={getACategory} key={name}>
        <img className="previewCategory" src={image} alt="" id={path} />
        <div className="title centered">{newName}</div>
      </li>
    );
  });
  // Run the category search stuff once the page loads
  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);
  return (
    <GifDisplayContainer displayTenor={displayTenor}>
      <div className="mainpart">
        <div className="top-section">
          <button className="cancel" type="button" onClick={removeTenor}>
            <img src={cancel} alt="" />
          </button>
          <input type="search" placeholder="SearchTenor" onChange={searchTenor} />
        </div>
        <div className="searchResults">
          {gifArray ? showResults : <img src={load} alt="" />}
        </div>
        <ul className="categoriesSection">
          {displayCategories}
        </ul>
        <div className="singleCategory">
          {/* eslint-disable-next-line */}
          <button type="button" className="backButton" onClick={closeAcategory}>Back</button>
          {showACategory}
        </div>
      </div>
    </GifDisplayContainer>
  );
};

export default GifContainer;
