import React from "react";

function ListingCard({id, description, image, location, starred, handleStarred, handleDelete}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {starred ? (
          <button className="emoji-button favorite active" onClick={() => handleStarred(id)} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => handleStarred(id)} >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(id)} >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
