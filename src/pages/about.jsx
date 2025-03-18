import countryFatc from '../api/countryData.json'
export const About = () => {

   const formatPopulation = (population) => {
      const fullNumber = population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let shortNumber;

      if (population >= 1_000_000_000) {
          shortNumber =  (population / 1_000_000_000).toFixed(2) + "B"; // Billion
       } else if (population >= 1_000_000) {
          shortNumber =  (population / 1_000_000).toFixed(2) + "M"; // Million
       } else {
         shortNumber = fullNumber;
       }
       return `${shortNumber} - ${fullNumber}`;
       
   }
   return (
      <>
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