import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("");

  const displayMessage = (msg) => {
    // Check if 'msg' is a string, otherwise set a default message
    if (typeof msg === "string" && msg.trim() !== "") {
      setMessage(`Message from child: ${msg}`);
    } else {
      setMessage("Message from child: No message provided");
    }
  };

  return (
    <>
      <Child sendMessage={displayMessage} />

      <div className="message-card">
        <h2>{message}</h2>
      </div>
    </>
  );
}

export default Parent;
