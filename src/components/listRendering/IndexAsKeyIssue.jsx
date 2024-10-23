import React, { useState } from "react";
import ListCard from "./ListCard";

const IndexAsKeyIssue = () => {
  const [names, setNames] = useState([
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
  ]);

  // Simulate a change that might break key integrity
  const removeItem = () => {
    setNames(names.slice(1)); // Remove the first item to illustrate key index shifting
  };

  return (
    <div>
      <h2>Why Using Index as Key is Discouraged</h2>
      {names.map((person, index) => (
        <ListCard id={index} data={person} key={index} />
      ))}
      <button onClick={removeItem}>Remove First Item</button>
    </div>
  );
};

export default IndexAsKeyIssue;
