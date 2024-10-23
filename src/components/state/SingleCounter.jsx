import React, { useState } from "react";

function SingleCounter({ initialvalue, incrementVale }) {
  const [count, setCount] = useState(initialvalue);

  const increment = () => {
    setCount((prev) => prev + incrementValue);
  };

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) increment();
  };

  return (
    <>
      <div className="counter">
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default SingleCounter;
