import countryFatc from '../api/countryData.json'
import styles from './About.module.css'
export const About = () => {

   const formatPopulation = (population) => {
      const fullNumber = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let shortNumber;

      if (population >= 1_000_000_000) {
         shortNumber = (population / 1_000_000_000).toFixed(2) + "B"; // Billion
      } else if (population >= 1_000_000) {
         shortNumber = (population / 1_000_000).toFixed(2) + "M"; // Million
      } else {
         shortNumber = fullNumber;
      }
      return `${shortNumber} - ${fullNumber}`;

   }
   return (
      <>
      <div className={styles.aboutContainer}>
            <h1 className={styles.heading}>About Country Explorer</h1>
            <p className={styles.description}>
               Welcome to Country Explorer! This app allows you to explore detailed information
               about countries worldwide. You can search, sort, and filter through country data
               effortlessly.
            </p>

            <h2 className={styles.subHeading}>Features:</h2>
            <ul className={styles.featureList}>
               <li>🌍 Browse and explore countries with ease</li>
               <li>🔍 Search, filter, and sort country data</li>
               <li>📊 View population, region, and capital information</li>
            </ul>

            <p className={styles.footer}>Built with ❤️ using React 19 and REST API integration.</p>
         </div>
         <br />
         <div>
            <h2>🌍 Country List</h2>
            <div className="country_wrap">
               {
                  countryFatc.map((country, index) => {
                     return (
                        <div key={index} className="country_single">
                           <img src={country.flag} alt="" width={50} />
                           <h1>{country.name}</h1>
                           <p>Capital: {country.capital}</p>
                           <p>Population: {formatPopulation(country.population)}</p>
                           <p>Region:  {country.region}</p>
                           <p></p>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </>
   );
}