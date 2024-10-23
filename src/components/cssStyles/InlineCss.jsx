// App.jsx
function InlineCss() {
  const containerStyle = {
    backgroundColor: "#cae6b2",
    color: "#8e3e63",
    padding: "20px",
    borderRadius: "8px",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1>Inline Styling Example</h1>
      <p>This is styled using inline styles.</p>
    </div>
  );
}

export default InlineCss;
