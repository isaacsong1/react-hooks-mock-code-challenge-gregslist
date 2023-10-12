import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const URL = "http://localhost:6001/listings";

function App() {
  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(URL)
    .then(resp => resp.json())
    .then(listingArr => setListings(listingArr.map(listing => ({...listing, starred: false}))))
    .catch(err => alert(err));
  }, [])

  const handleStarred = (listingId) => {
    setListings(currListings => currListings.map(listing => listing.id === listingId ? {...listing, starred: !listing.starred} : listing));
  }

  const handleDelete = (listingId) => {
    fetch(`${URL}/${listingId}`, {method: "DELETE"});
    setListings(currListings => currListings.filter(listing => listing.id !== listingId));
  }

  const handleSearch = (search) => {
    setSearchQuery(search)
    // setListings(currListings => currListings.filter(listing => listing.includes(search)));
  }

  return (
    <div className="app">
      <Header searchQuery={searchQuery} handleSearch={handleSearch} />
      <ListingsContainer listings={listings} searchQuery={searchQuery} handleStarred={handleStarred} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
