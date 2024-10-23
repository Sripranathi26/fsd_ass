import React from "react";

function ConditionalRendering({ isLogged }) {
  //   if (isLogged) {
  //     return <h1>Welcome to Dashboard</h1>;
  //   } else {
  //     return <h1>Kindly Login</h1>;
  //   }

  //   let render;
  //   if (isLogged) render = <h1>Welcome to Dashboard</h1>;
  //   else render = <h1>Kindly Login</h1>;

  //   return (
  //     <>
  //       <h1>welcome to my page</h1>
  //       {render}
  //     </>
  //   );

  //   return (
  //     <>{isLogged ? <h1>Welcome to Dashboard</h1> : <h1>Kindly Login</h1>}</>
  //   );

  return (
    <>
      {isLogged && <h1>Welcome to Dashboard</h1>}
      {!isLogged && <h1>Kindly Login</h1>}
    </>
  );
}

export default ConditionalRendering;

/*
if-else
element variable
tenary
short-circuit && ||
*/
