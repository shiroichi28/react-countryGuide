import axios from "axios";
import { useState } from "react";
import Country from "./components/Country";
function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [country, setCountry] = useState([]);
  const handleValue = (event) => {
    const value = event.target.value;
    setInput((prevValue) => value);
  };
  const getCountries = async (input) => {
    const data = await axios.get(
      `https://restcountries.com/v3.1/name/${input}?fullText=true`
    );
    const res = data.data;
    setCountry(res);
  };
  const handleSubmit = () => {
    if (input === "") {
      setError("Field is empty");
    } else {
      getCountries(input);
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
        />
        <button id="searchBtn" onClick={() => handleSubmit()}>
          Search
        </button>
      </div>
      <div id="result">
        {country.length > 0 && <Country country={country} />}
      </div>
    </div>
  );
}

export default App;
