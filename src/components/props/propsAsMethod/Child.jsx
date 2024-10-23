import React from "react";

function Child({ sendMessage }) {
  return (
    <>
      <div className="btns">
        <button onClick={sendMessage}>Display Message</button>
        <button
          onClick={() => {
            sendMessage("Dineshkumar");
          }}
        >
          Display Name
        </button>
        <button
          onClick={() => {
            sendMessage("dinesh@gmail.com");
          }}
        >
          Display Email
        </button>
      </div>
    </>
  );
}

export default Child;
