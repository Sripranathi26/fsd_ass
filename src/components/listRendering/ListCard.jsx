import React from "react";

const ListCard = ({ data }) => {
  return (
    <div className="list-card">
      <h3>ID: {data.id}</h3>
      <p>Name: {data.name}</p>
      {data.age && <p>Age: {data.age}</p>}
      {data.occupation && <p>Occupation: {data.occupation}</p>}
    </div>
  );
};

export default ListCard;
