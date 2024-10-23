import React, { useState } from "react";
import ListCard from "./ListCard";
import ProfileForm from "./ProfileForm"; // Import the form component
import ProfileSearch from "./ProfileSearch";

const Profile = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Alice", age: 28, occupation: "Engineer" },
    { id: 2, name: "Bob", age: 30, occupation: "Doctor" },
    { id: 3, name: "Charlie", age: 25, occupation: "Artist" },
  ]);

  const [searchQuery, setSearchQuery] = useState(""); // State to track search input

  // Handler to add a new profile to the array
  const addProfile = (newProfile) => {
    // Add a unique ID to the new profile
    const updatedProfile = { ...newProfile, id: profiles.length + 1 };
    setProfiles([...profiles, updatedProfile]);
  };

  // Handler to update search query
  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
  };

  // Filter profiles based on search query
  const filteredProfiles = profiles.filter(
    (profile) => profile.name.toLowerCase() === searchQuery.toLowerCase()
  );

  return (
    <>
      <ProfileForm addProfile={addProfile} />

      <div className="profiles-card">
        {profiles.map((profile) => (
          <ListCard data={profile} key={profile.id} />
        ))}
      </div>

      <ProfileSearch handleSearch={handleSearch} />

      <div className="profiles-card">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ListCard data={profile} key={profile.id} />
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </>
  );
};

export default Profile;
