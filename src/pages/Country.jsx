import { useEffect, useTransition, useState, useMemo } from "react";
import { getCountryData } from '../api/postApi';
import { CountryCard } from "../Components/Layout/countryCard";
import { SearchFilter } from "../Components/UI/searchFilter";

export const Country = () => {
   const [isPending, startTransition] = useTransition();
   const [countries, setCountries] = useState([]);

   const [search, setSearch] = useState(""); // Search Country
   const [filter, setFilter] = useState("all"); // Region filter
   const [sortBy, setSortBy] = useState("name-asc"); // Sorting
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 10;

   // Fetch data on mount
   useEffect(() => {
      startTransition(async () => {
         try {
            const response = await getCountryData();
            setCountries(response); // Store fetched data
         } catch (error) {
            console.error("Error fetching countries:", error);
         }
      });
   }, []);


   // ------------ Way 1. For filter and Search and sort  ------------//
   // 🧮 Helper function for safe string comparison
   const safeString = (value) => value ? value.toLowerCase() : "";

   // 📊 Multi-level sorting function
   const sortCountries = (a, b) => {
      if (sortBy.includes("name")) {
         const nameComparison = a.name.common.localeCompare(b.name.common);
         return sortBy === "name-asc" ? nameComparison : -nameComparison;
      }
      if (sortBy.includes("population")) {
         return sortBy === "population-asc"
            ? a.population - b.population
            : b.population - a.population;
      }
      return 0; // Default: No sorting
   };

   // 🔥 Memoized Filter and Sort Operation
   const filterCountries = useMemo(() => {
      return countries
         .filter((country) => {
            const matchesSearch = safeString(country.name.common).includes(safeString(search));
            const matchesRegion = filter === "all" || country.region === filter;
            return matchesSearch && matchesRegion;
         })
         .sort(sortCountries); // Apply sorting
   }, [countries, search, filter, sortBy]);


   // ------------ Way 2. For filter and Search and sort  ------------ //
   // const filterCountries = countries
   // .filter((country) => {
   //    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase())
   //    const matchesRegion = filter === "all" || country.region === filter;

   //    return matchesSearch && matchesRegion;
   // })
   // .sort((a,b)=>{
   //    if(sortBy === 'name-asc') return a.name.common.localeCompare(b.name.common);
   //    if(sortBy === 'name-desc') return b.name.common.localeCompare(a.name.common);

   //    if(sortBy === "population-asc") return a.population - b.population ;
   //    if(sortBy === "population-desc") return b.population - a.population ;
   //    return 0 ;
   // })


   // Pagination for country list
   const handlePageChange = (newPage) => {
      setCurrentPage(newPage)
   }
   const paginatedCountries = filterCountries.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

   const totalPages = Math.ceil(filterCountries.length / itemsPerPage);

   return (
      <>
         <main className="country-container">

            {isPending && <h1>Loading...</h1>}

            <h1 className="page-title">Country</h1>
            <p>Welcome to the Country page</p>

            {/* Search, Filter, Sort */}
            <SearchFilter
               search={search}
               setSearch={setSearch}
               filter={filter}
               setFilter={setFilter}
               sortBy={sortBy}
               setSortBy={setSortBy} // Pass sorting prop
               currentPage={currentPage}
               setCurrentPage={setCurrentPage}
            />
            {/* Country Cards */}
            <ul className="country-list">
               {/* {filterCountries.map((country, index) => {
               return <CountryCard key={index} country={country} />
            })} */}

               {paginatedCountries.map((country, index) => {
                  return <CountryCard key={index} country={country} />
               })}

            </ul>

            {/* Pagination */}
            <div className="pagination">
               {Array.from({ length: totalPages }, (_, index) => (
                  <button
                     key={index}
                     onClick={() => handlePageChange(index + 1)}
                     disabled={index + 1 === currentPage}
                  >
                     {index + 1}
                  </button>
               ))}
            </div>
         </main>
      </>
   );
};
