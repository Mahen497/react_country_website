# 🌍 Country Explorer

A React 19 project to explore information about countries, including details such as population, region, and capital, with the ability to compare multiple countries.

## Features

**Home Page:**
   - Displays a list of countries with information fetched dynamically from the [REST Countries API](https://restcountries.com/).
   - Includes country names, population, region, and capital.
   - Displays a list of countries fetched dynamically from the REST Countries API.
   - Users can view essential information such as country name, population, region, and capital.

**Navigation System:**
   - Seamless navigation across pages using React Router.

**Responsive Design:**
   - Fully responsive interface suitable for desktop, tablet, and mobile screens.
**Search Functionality:**
  - Users can search for countries by name in real time.
**Sorting:**
  - Allows users to sort countries alphabetically or by population.
**Filtering:**
  - Users can filter countries based on their region (e.g., Asia, Europe, etc.).
**Country Details Page:**
  - Displays detailed information about a selected country, including borders and additional metadata.
**Navigation System:**
  - Seamless navigation between the home page and the country details page.
**Error Handling:**
  - Handles API errors and displays appropriate messages to the user.


## Technologies Used

- **React 19**: Latest React framework for building UI.
- **React Router**: For client-side navigation and routing.
- **REST Countries API**: External API to fetch live country data.
- **CSS Modules**: Modular styling approach for better component isolation.

## 📁 Folder Structure

```
Country-Explorer/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │     ├── Header.jsx
│   │     ├── Footer.jsx
│   │     ├── CountryCard.jsx
│   │     └── CountryComparison.jsx
│   ├── pages/
│   │     ├── HomePage.jsx
│   │     └── CountryDetailsPage.jsx
│   ├── App.js
│   └── index.js
└── package.json
```

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/country-explorer.git
   cd country-explorer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

## Improvements Implemented

- **Optimized API Calls:** Reduced unnecessary API requests by caching responses where applicable.
- **Component Structure:** Separated UI components into reusable modules for better scalability.
- **Error Handling:** Implemented basic error handling for API failures and invalid routes.

## Pros of the Project

- **Efficiency:** Utilizes React 19 for better performance and concurrent rendering.
- **User-Friendly:** Easy-to-navigate interface with intuitive comparison features.
- **Scalability:** Modular codebase allowing easy expansion and maintenance.
- **Customization:** Simple to extend and add new features.


## 📈 Future Improvements

- **Add Dark Mode:** Implement a toggle for light/dark themes.
- **Pagination:** Improve performance by adding pagination for large datasets.
- **Enhanced Filters:** Add multi-level filters (e.g., population range, languages).
- **Performance Optimization:** Optimize API calls and UI rendering for better performance.
- **Country Comparison:**
   - Users can select and compare multiple countries side-by-side.


## 📚 Technologies Used

- React 19
- Vite
- REST Countries API
- JavaScript (ES6+)
- CSS (Modular Components)

## Contribution

Feel free to contribute by forking the repository and submitting a pull request. Ensure your code follows best practices and is well-documented.


