import React from "react";
import "../ui-styles/searchMobile.scss";

import { GrClose } from "react-icons/gr";

export default function SearchMobile({ search, handleSearch, toggleSearch }) {
  //here i should get search input state from sibling component

  return (
    <div className="search-mobile__content">
      <div className="close__search" onClick={toggleSearch}>
        <GrClose />
      </div>
      <div className="search-mobile__content">
        <input
          className="search-mobile__input"
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search for items "
        />
        <div className="search__results">{"map all the results here"}</div>
      </div>
    </div>
  );
}
