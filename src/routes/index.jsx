import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import IndividualItem from "../pages/IndividualItem";
import InfoSecreta from "../pages/InfoSecreta";
import Nosotros from "../pages/Nosotros";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/secreta",
    element: <InfoSecreta />,
  },
  {
    path:'/individual/:id/',
    element:<IndividualItem/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const navbarlinks = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/contacto",
    text: "Contacto",
  },
  {
    path: "/secreta",
    text: "Info Secreta",
  },
  {
    path: "/nosotros",
    text: "Nosotros",
  },
];
