import React from "react";
import ListCard from "./ListCard";

const ArrayWithoutKey = () => {
  const names = ["Dinesh", "Divya", "Darwin"];

  return (
    <>
      <div className="name-list">
        <h2>Array without Key</h2>
        {names.map((person) => (
          <h3>{person}</h3>
        ))}
      </div>
    </>
  );
};

export default ArrayWithoutKey;
