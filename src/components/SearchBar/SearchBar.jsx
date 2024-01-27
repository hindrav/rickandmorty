import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../redux/slices/searchSlice";
import { RiHome6Line } from "react-icons/ri";

import { Link } from "react-router-dom";

import "./SearchBar.scss";

const SearchBar = () => {
  const searchTerm = useSelector((state) => state.search.setSearchTerm);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    // dispatch the action to set the search term in Redux store
    dispatch(setSearchTerm(newSearchTerm));
  };
  return (
    <div className="search-form">
      <Link to="/" className="search-return"><RiHome6Line /></Link>
      <input
        type="text"
        placeholder={`Search by character name`}
        value={searchTerm}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export { SearchBar };
