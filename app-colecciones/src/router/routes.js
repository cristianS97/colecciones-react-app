// React router
import { createBrowserRouter } from "react-router-dom";
// Mis importaciones
import { Root } from "./Root";
import { ErrorPage } from "./ErrorPage";
import { Index } from "../components/index/Index";
import { Colecciones } from "../components/coleccion/Colecciones";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <Index />
            },
            {
                path: 'collections',
                element: <Colecciones />
            }
        ]
    }
]);