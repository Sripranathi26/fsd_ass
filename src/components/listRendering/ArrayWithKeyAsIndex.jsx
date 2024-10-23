import React from "react";

const ArrayWithKeyAsIndex = () => {
  const names = ["Dinesh", "Divya", "Darwin"];

  return (
    <>
      <div className="name-list">
        <h2>Array with Key</h2>
        {names.map((person, index) => (
          <h3 key={index}>{person}</h3>
        ))}
      </div>
    </>
  );
};

export default ArrayWithKeyAsIndex;
