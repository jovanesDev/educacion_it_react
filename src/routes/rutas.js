import Formulario from "../pages/Formulario";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

export const routes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/product/:id',
        element:<ProductDetail/>
    },
    {
        path:'/formulario',
        element:<Formulario/>
    }
]