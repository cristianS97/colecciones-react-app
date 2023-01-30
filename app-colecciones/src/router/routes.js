// React router
import { createBrowserRouter } from "react-router-dom";
// Mis importaciones
import { Root } from "./Root";
import { ErrorPage } from "./ErrorPage";
import { Index } from "../components/index/Index";
import { Colecciones } from "../components/coleccion/Colecciones";
import { LoginPage } from "../components/login/LoginPage";
import { CollectionDetail } from "../components/coleccion/CollectionDetail";

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
            },
            {
                path: 'collection',
                element: <CollectionDetail />
            },
            {
                path: 'login',
                element: <LoginPage />
            }
        ]
    }
]);