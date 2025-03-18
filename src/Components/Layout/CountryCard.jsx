import { NavLink, useNavigate } from "react-router-dom";

export const CountryCard = ({ country }) => {

  return (
    <li className="country-card" >
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="country-flag"
      />
      <div className="country-details">
        <h3>{country.name.common.length > 15 ? `${country?.name?.common.slice(0, 15)}...` : country.name.common}</h3>
        <p><strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}</p>
        <p><strong>Region:</strong> {country?.region || "Unknown Region"}</p>
        <p><strong>Population:</strong> {country?.population || "Unknown population"}</p>
        <NavLink to={`/country/${encodeURIComponent(country.name.common)}`}>
          Read More →
        </NavLink>
      </div>
    </li>
  );
};
