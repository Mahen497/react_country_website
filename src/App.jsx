import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { AppLayout } from "./Components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { About } from "./pages/about";
import { CountryDetail } from "./Components/Layout/CountryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "country",
        element: <Country />
      },
      {
        path: "country/:name",
        element: <CountryDetail  />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;