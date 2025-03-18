import { useEffect, useState, useTransition } from "react";
import { getSingleCountry } from "../../api/postApi";
import { useNavigate, useParams } from "react-router-dom";

export const CountryDetail = () => {
   const { name } = useParams(); // Get country name from URL
   const navigate = useNavigate();

   const [isPending, startTransition] = useTransition();
   const [country, setCountry] = useState();

   useEffect(() => {
      startTransition(async () => {
         try {
            const response = await getSingleCountry(name);
            if (response && response.data.length > 0) {
               setCountry(response.data[0]);

            } else {
               console.error("Country not found!");
            }
         } catch (error) {
            console.error("Error fetching country:", error);
         }
      });
   }, [name]);

   if (isPending || !country) return <h1>Loading country details...</h1>;


   // DetailItem Component for cleaner JSX
   const DetailItem = ({ label, value }) => (
      <p><strong>{label}:</strong> {value || "N/A"}</p>
   );

   return (
      <div style={styles.container}>
         <button onClick={() => navigate(-1)} style={styles.backButton}>
            🔙 Back to List
         </button>
         <div style={styles.group}>
            <div>
               <h1>{country.name?.common} ({country.cca2})</h1>
               <img
                  src={country.flags?.svg || "/fallback-coat.png"}
                  alt={`Flag of ${country.name?.common}`}
                  style={styles.flag}
               />

               <p><strong>Coat of Arms:</strong></p>
               <img
                  src={country.coatOfArms?.svg || "/fallback-coat.png"}
                  alt="Coat of Arms"
                  style={styles.coatOfArms}
               />
            </div>
            <div style={styles.details}>
               <DetailItem label="Official Name" value={country.name?.official} />
               <p><strong>Official Name:</strong> {country.name?.official}</p>
               <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
               <p><strong>Region:</strong> {country.region}, {country.subregion}</p>
               <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
               <p><strong>Area:</strong> {country.area.toLocaleString()} km²</p>

               <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ")}</p>

               <p><strong>Currency:</strong> {Object.values(country.currencies || {})
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(", ")}</p>

               <p><strong>Timezones:</strong> {country.timezones.join(", ")}</p>

               <p><strong>Borders:</strong> {country.borders?.join(", ") || "No Borders"}</p>

               <p><strong>Continents:</strong> {country.continents?.join(", ")}</p>

               <p><strong>Gini Index (Income Inequality):</strong> {country.gini?.[2018] || "N/A"}%</p>

               <p><strong>Start of Week:</strong> {country.startOfWeek}</p>

               <p><strong>Top-Level Domain (TLD):</strong> {country.tld?.join(", ")}</p>

               <p><strong>Maps:</strong>
                  <a href={country.maps?.googleMaps} target="_blank" rel="noopener noreferrer"> Google Maps</a> |
                  <a href={country.maps?.openStreetMaps} target="_blank" rel="noopener noreferrer"> OpenStreetMap</a>
               </p>
            </div>
         </div>
      </div>
   );
};

// Inline CSS styles for better organization
const styles = {
   container: {
      padding: "20px",
      maxWidth: "900px",
      margin: "auto",
      fontFamily: "'Arial', sans-serif",
   },
   backButton: {
      padding: "10px 20px",
      marginBottom: "20px",
      cursor: "pointer",
      borderRadius: "8px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      fontSize: "16px",
   },
   flag: {
      width: "300px",
      borderRadius: "10px",
      margin: "20px 0",
   },
   details: {
      lineHeight: "1.8",
      fontSize: "18px",
      paddingLeft: "25px"
   },
   coatOfArms: {
      width: "200px",
      marginTop: "10px",
   },
   group: {
      display: "flex",
   }
};
