import React from "react";
import ListCard from "./ListCard";

const ObjectWithIdAsKey = () => {
  const profiles = [
    { id: 1, name: "Alice", age: 28, occupation: "Engineer" },
    { id: 2, name: "Bob", age: 32, occupation: "Doctor" },
    { id: 3, name: "Charlie", age: 25, occupation: "Artist" },
  ];

  return (
    <div>
      <h2>Object with ID as Key</h2>
      {profiles.map((profile) => (
        <ListCard data={profile} key={profile.id} />
      ))}
    </div>
  );
};

export default ObjectWithIdAsKey;
