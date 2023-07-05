function Country(props) {
  return (
    <>
      <img src={props.country[0].flags.svg} alt="" className="flag" />
      <h2>{props.country[0].name.common}</h2>
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Capital: <span>{props.country[0].capital[0]}</span>{" "}
          </h4>
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Continent: <span>{props.country[0].continents[0]}</span>{" "}
          </h4>
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Population: <span>{props.country[0].population}</span>{" "}
          </h4>
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Currency:{" "}
            <span>
              {Object.keys(props.country[0].currencies)[0].name}-
              {Object.keys(props.country[0].currencies)[0]}
            </span>
          </h4>
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-items">
          <h4>
            Common Language:{" "}
            <span>
              {Object.values(props.country[0].languages)
                .toString()
                .split(",")
                .join(", ")}
            </span>
          </h4>
        </div>
      </div>
    </>
  );
}
export default Country;
