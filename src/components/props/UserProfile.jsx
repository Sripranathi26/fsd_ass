import React from "react";

function UserProfile(props) {
  const { name, age, email, address } = props;
  return (
    <>
      <div className="userProfile">
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
      </div>
    </>
  );
}

export default UserProfile;
