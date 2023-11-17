import React from "react";
import "../ui-styles/searchMobile.scss";
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";

export default function SearchMobile({
  search,
  handleSearch,
  toggleSearch,
  searchResults,
}) {
  return (
    <div className="search-mobile__content">
      <div className="close__search" onClick={toggleSearch}>
        <GrClose />
      </div>
      <div className="input__search">
        <BsSearch className="search-mobile__icon" />
        <input
          className="search-mobile__input"
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search for items"
        />
        {search !== "" ? searchResults : null}
      </div>
    </div>
  );
}
