import React, { useState } from "react";

function MultiCounter() {
  const [counts, setCounts] = useState({ countA: 0, countB: 0 });

  const incrementA = () => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      countA: prevCounts.countA + 1,
    }));
  };

  const incrementB = () => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      countB: prevCounts.countB + 1,
    }));
  };

  // useEffect that listens for changes in countA
  useEffect(() => {
    console.log(`countA has been updated to: ${counts.countA}`);
  }, [counts.countA]); // Dependency on 'counts.countA'

  // useEffect that listens for changes in countB
  useEffect(() => {
    console.log(`countB has been updated to: ${counts.countB}`);
  }, [counts.countB]); // Dependency on 'counts.countB'

  return (
    <div>
      <h1>Counter A: {counts.countA}</h1>
      <button onClick={incrementA}>Increment A</button>
      <h1>Counter B: {counts.countB}</h1>
      <button onClick={incrementB}>Increment B</button>
    </div>
  );
}

export default MultiCounter;
