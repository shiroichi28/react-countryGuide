function Country(props) {
  // Extract the country object from props
  const country = props.country[0];

  // Extract relevant information from the country object
  const {
    flags,
    name,
    capital,
    continents,
    population,
    currencies,
    languages,
  } = country;

  // Get the name of the first currency
  const currencyName = currencies[Object.keys(currencies)[0]].name;

  // Get the code of the first currency
  const currencyCode = Object.keys(currencies)[0];

  // Format the common languages as a comma-separated string
  const commonLanguages = Object.values(languages)
    .toString()
    .split(",")
    .join(", ");

  return (
    <>
      {/* Display the country flag */}
      <img src={flags.svg} alt="country flag" className="flag" />

      {/* Display the country name */}
      <h2>{name.common}</h2>

      {/* Display the capital */}
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Capital: <span>{capital[0]}</span>
          </h4>
        </div>
      </div>

      {/* Display the continent */}
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Continent: <span>{continents[0]}</span>
          </h4>
        </div>
      </div>

      {/* Display the population */}
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Population: <span>{population}</span>
          </h4>
        </div>
      </div>

      {/* Display the currency */}
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Currency:{" "}
            <span>
              <span className="currencyName">{currencyName}</span> - {currencyCode}
            </span>
          </h4>
        </div>
      </div>

      {/* Display the common language(s) */}
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Common Language: <span>{commonLanguages}</span>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Country;
