import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const sendTestData = async () => {
    const testData = {
        "UpsertModel": {
            "ApiId": 10,
            "value1": 100,
            "value2": 200
      }
    };
    try {
      const response = await fetch("http://localhost:5279/api/api/upsert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      });

      const result = await response.json();
      console.log("Success:", result);
      alert("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Error sending data.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <button onClick={sendTestData}>TEST API</button>
      </header>
    </div>
  );
}

export default App;
