import React, { useState } from "react";
import axios from "axios";
import DictionaryResult from "./components/Dictionary";
import "./App.css";
const DictionaryApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [dictionaryData, setDictionaryData] = useState(null);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
      );
      setDictionaryData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log("dictionary ko data", dictionaryData);

  return (
    <div className="app">
      <h1 className="app-heading">Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a word"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {dictionaryData ? (
        <DictionaryResult data={dictionaryData} />
      ) : (
        "No result found"
      )}{" "}
    </div>
  );
};

export default DictionaryApp;
