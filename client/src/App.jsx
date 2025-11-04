import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Welcome to chaiaurcode frontend</h1>
      <p>data: {message}</p>
    </>
  );
}

export default App;
