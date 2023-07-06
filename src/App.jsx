import axios from "axios";
import { useState } from "react";
import Country from "./components/Country";

function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [country, setCountry] = useState([]);

  // Update the input state with the value from the input field
  const handleValue = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  // Fetch countries based on the input value
  const getCountries = async (input) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${input}?fullText=true`
      );
      const data = response.data;
      setCountry(data);
      setError(""); // Clear any previous errors
    } catch (error) {
      setError(
        "Please enter a valid country name or enter the full name of the country"
      );
      setCountry([]); // Clear country data in case of an error
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (input === "") {
      setError("Field is empty");
      setCountry([]); // Clear country data if input is empty
    } else {
      getCountries(input);
    }
  };

  // Handle Enter key press in the input field
  const searchEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="container">
      <div className="App">
        <input
          type="text"
          id="searchCountry"
          placeholder="Search"
          value={input}
          onChange={handleValue}
          onKeyDown={searchEnterKey}
        />
        <button id="searchBtn" onClick={handleSubmit}>
          Search
        </button>
      </div>
      <div id="result">
        {/* Display error message if there is an error and no country data */}
        {error && country.length === 0 && <h3>{error}</h3>}
        {/* Display country information if country data is available */}
        {country.length > 0 && <Country country={country} />}
      </div>
    </div>
  );
}

export default App;
