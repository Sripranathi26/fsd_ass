import React from "react";

function ChildrenContainer(props) {
  const { name, children } = props;
  return (
    <>
      <div className="card">
        <h1>Welcome {name}</h1>
        <div className="content">{children}</div>
      </div>
    </>
  );
}

export default ChildrenContainer;
