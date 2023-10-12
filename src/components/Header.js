import React from "react";
import Search from "./Search";

function Header({searchQuery, handleSearch}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchQuery={searchQuery} handleSearch={handleSearch} />
    </header>
  );
}

export default Header;
