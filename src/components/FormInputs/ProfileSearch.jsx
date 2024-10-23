import React, { useState } from "react";

const ProfileSearch = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    handleSearch(searchQuery); // Pass the search query to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchQuery} // Controlled input
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default ProfileSearch;
