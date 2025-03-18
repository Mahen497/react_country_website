import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCountryData } from "../api/postApi";

export const CountryDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const data = await getCountryData();
        const selectedCountry = data.find((item) => item.name.common === name);
        setCountry(selectedCountry || null);
      } catch (error) {
        console.error("Error fetching country:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCountry();
  }, [name]);

  if (loading) return <h2>Loading country details...</h2>;
  if (!country) return <h2>Country not found!</h2>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>🔙 Back to List</button>
      <h1>{country.name.common}</h1>
      <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
      <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
    </div>
  );
};
