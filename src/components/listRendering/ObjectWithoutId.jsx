import React from "react";
import { v4 as uuidv4 } from "uuid";
import ListCard from "./ListCard";

const ObjectWithoutId = () => {
  const profiles = [
    { name: "Eve", age: 29, occupation: "Scientist" },
    { name: "Dave", age: 35, occupation: "Lawyer" },
    { name: "Mallory", age: 27, occupation: "Writer" },
  ];

  return (
    <div>
      <h2>Object without ID (Using UUID)</h2>
      {profiles.map((profile) => {
        const profileWithId = { ...profile, id: uuidv4() };
        return <ListCard data={profileWithId} key={profileWithId.id} />;
      })}
    </div>
  );
};

export default ObjectWithoutId;
