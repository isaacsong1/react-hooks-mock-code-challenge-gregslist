import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, searchQuery, handleStarred, handleDelete}) {
  const mappedListings = listings.filter(listing => searchQuery ? listing.description.toLowerCase().includes(searchQuery) : listing).map(listing => <ListingCard key={listing.id} {...listing} handleStarred={handleStarred} handleDelete={handleDelete} />);

  return (
    <main>
      <ul className="cards">
        {mappedListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
