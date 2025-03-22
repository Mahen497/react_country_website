import { Link, NavLink } from "react-router-dom";
import "./HeaderFooter.css";

export const Header = () => {
   return (<>
      <header className="header">
         <div className="header__top">
            <h1 className="logo">
               <NavLink to="/">
                  CountryEase
               </NavLink>
            </h1>
            <nav className="nav">
               <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                  <li><NavLink to="/country">Country</NavLink></li>
               </ul>
            </nav>
         </div>
      </header>
   </>);
}