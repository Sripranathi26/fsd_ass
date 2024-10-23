import React, { useState } from "react";
import JokeComponent from "./JokeComponent";

const JokesContainer = () => {
  const [jokes, setJokes] = useState([1, 2, 3]); // Example with 3 jokes initially

  const removeJoke = (id) => {
    setJokes(jokes.filter((jokeId) => jokeId !== id));
  };

  const addJoke = () => {
    const nextId = jokes.length + 1;
    setJokes([...jokes, nextId]);
  };

  return (
    <div className="jokes-container">
      <button className="joke-btn" onClick={addJoke}>
        Add a new Joke
      </button>
      <div className="jokes-list">
        {jokes.map((id) => (
          <JokeComponent key={id} id={id} onRemove={removeJoke} />
        ))}
      </div>
    </div>
  );
};

export default JokesContainer;
