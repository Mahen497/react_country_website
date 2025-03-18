import { Outlet } from "react-router-dom";
import { Footer } from "../UI/Footer";
import { Header } from "../UI/Header";

export const AppLayout = () => {
   return (
      <>
         <Header />
         <div className="content_wrap">
            <Outlet/>
         </div>
         <Footer />
      </>
   );
}