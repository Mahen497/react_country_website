export const SearchFilter = ({ search, setSearch, filter, setFilter, sortBy, setSortBy, setCurrentPage, countries }) => {

   const handleInputChange = (e) => {
      setSearch(e.target.value)
      setCurrentPage(1)
   }

   const handleChangeRegion = (e) => {
      e.preventDefault();
      setFilter(e.target.value);
   }

   const handleSortChange = (e) => {
      setSortBy(e.target.value);
   }

   // Get unique regions from countries
   const uniqueRegions = Array.from(
      new Set(countries.map(
         (country) => country.region).filter(Boolean)
      )
   );

   return (<>
      <div className="search-filter">
         <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={handleInputChange}
         />

         {/* Region Filter */}
         <select value={filter} onChange={handleChangeRegion}>
            <option value="all">All</option>
            {
               uniqueRegions.map((region) => {
                  return <option value={region}>{region}</option>
               })
            }
         </select>

         {/* <select value={filter} onChange={handleChangeRegion}>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
         </select> */}

         {/* Sort By */}
         <select value={sortBy} onChange={handleSortChange}>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="population-asc">Population (Low to High)</option>
            <option value="population-desc">Population (High to Low)</option>
         </select>

         <button onClick={()=>{
            setSearch('');
            setFilter('all');
            setSortBy('name-asc');
            setCurrentPage(1);
         }}>
            Clear Filters
         </button>
      </div>
   </>);
}