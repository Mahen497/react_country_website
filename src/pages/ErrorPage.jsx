import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
   const error = useRouteError();
   return (
      <>
         <div className="error-container">
            <h1>Oops! Something Went Wrong 😔</h1>
            <p>We couldn't find the page you're looking for.</p>
            {error && <p>{error.data}</p>}
            {error && (
               <div className="error-details">
                  <h2>Error Details:</h2>
                  <p>{error.status || "Unknown Error"}</p>
                  <p>{error.statusText || "Something went wrong."}</p>
                  {error.data && <p>{error.data}</p>}
               </div>
            )}
            <NavLink to="/" className="home-link">🔙 Go Back Home</NavLink>
         </div>
      </>
   );
}