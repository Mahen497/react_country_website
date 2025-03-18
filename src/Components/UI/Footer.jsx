import { Link, NavLink } from "react-router-dom";
import "./HeaderFooter.css";
import footerApi from "../../api/footerApi";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";

export const Footer = () => {

   const footerIcon = {
      MdPlace:<MdPlace/>,
      TbMailPlus:<TbMailPlus/>,
      IoCallSharp:<IoCallSharp/>
   }

   return (
      <>
         <footer className="footer">
            <div className="footer__top">
               {
                  footerApi.map((curData, index)=>{
                     const {icon, title, description} = curData;
                     return(
                        <div className="footer__top__item" key={index}>
                           <span>{footerIcon[icon]}</span>
                           <h3>{title}</h3>
                           <p>{description}</p>
                        </div>
                     )
                  })
               }
            </div>
            <div className="footer__content">
               <div className="footer_content_inner">
                  <p>&copy; {new Date().getFullYear()} CountryEase. All Rights Reserved.</p>
                  <div className="footer-links">
                     <NavLink to="/privacy">Privacy Policy</NavLink>
                     <NavLink to="/terms">Terms of Service</NavLink>
                     <NavLink to="/contact">Contact Us</NavLink>
                  </div>
               </div>
            </div>
         </footer>
      </>);
}