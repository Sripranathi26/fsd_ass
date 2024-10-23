import React, { useState } from "react";
import UseEffectCounter from "./UseEffectCounter";

function UseEffectCounters() {
  const [visibleCounters, setVisibleCounters] = useState({
    counter1: true,
    counter5: true,
    counter10: true,
    counter20: true,
  });
  
  const [newCounterValue, setNewCounterValue] = useState(1);

  const handleRemoveCounter = (e) => {
    e.preventDefault();
    const counterToRemove = e.target.elements.selectCounter.value;
    setVisibleCounters((prevCounters) => ({
      ...prevCounters,
      [counterToRemove]: false,
    }));
  };

  const handleAddCounter = (e) => {
    e.preventDefault();
    const counterKey = `counter${newCounterValue}`;
    if (!visibleCounters[counterKey]) {
      setVisibleCounters((prevCounters) => ({
        ...prevCounters,
        [counterKey]: true,
      }));
    }
  };

  return (
    <section className="counters-container">
      <section className="counters">
        {visibleCounters.counter1 && (
          <UseEffectCounter initialValue={0} incrementValue={1} />
        )}
        {visibleCounters.counter5 && (
          <UseEffectCounter initialValue={0} incrementValue={5} />
        )}
        {visibleCounters.counter10 && (
          <UseEffectCounter initialValue={0} incrementValue={10} />
        )}
        {visibleCounters.counter20 && (
          <UseEffectCounter initialValue={0} incrementValue={20} />
        )}
        {Object.keys(visibleCounters).map(counter => visibleCounters[counter] && (
          <UseEffectCounter
            key={counter}
            initialValue={0}
            incrementValue={parseInt(counter.replace('counter', ''), 10)}
          />
        ))}
      </section>
      <section className="remove-con">
        <form className="remove-form" onSubmit={handleRemoveCounter}>
          <label htmlFor="selectCounter">Select Counter to Remove:</label>
          <select name="selectCounter" id="selectCounter">
            <option value="counter1">Remove Counter 1</option>
            <option value="counter5">Remove Counter 5</option>
            <option value="counter10">Remove Counter 10</option>
            <option value="counter20">Remove Counter 20</option>
          </select>
          <button type="submit">Remove Counter</button>
        </form>
      </section>
      <section className="add-con">
        <form className="add-form" onSubmit={handleAddCounter}>
          <label htmlFor="newCounterValue">Select Counter to Add:</label>
          <select
            name="newCounterValue"
            id="newCounterValue"
            value={newCounterValue}
            onChange={(e) => setNewCounterValue(e.target.value)}
          >
            <option value={1}>Counter 1</option>
            <option value={5}>Counter 5</option>
            <option value={10}>Counter 10</option>
            <option value={20}>Counter 20</option>
          </select>
          <button type="submit">Add Counter</button>
        </form>
      </section>
    </section>
  );
}

export default UseEffectCounters;
