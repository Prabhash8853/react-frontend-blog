import React, { useState } from "react";
import "./SearchBar.css";
import SearchPanel from "../../Container/SearchPanel/SearchPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = props => {
  const [openSearchPanel, setOpenSearchPanel] = useState(false);

  const handleOpenSearch = () => {
    openSearchPanel ? setOpenSearchPanel(false) : setOpenSearchPanel(true);
  };

  return (
    <div className="searchbar_container">
      <div className="searchBar-search txt-rt">
        <div onClick={handleOpenSearch}>
          <FontAwesomeIcon icon={faSearch} className="search-color" />
        </div>

        {openSearchPanel ? (
          <SearchPanel handleOpenSearch={handleOpenSearch} />
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
