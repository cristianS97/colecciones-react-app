// React router
import { createBrowserRouter } from "react-router-dom";
// Mis importaciones
import { Root } from "./Root";
import { ErrorPage } from "./ErrorPage";
import { Index } from "../components/index/Index";
import { Colecciones } from "../components/coleccion/Colecciones";
import { LoginPage } from "../components/login/LoginPage";
import { RegisterPage } from "../components/login/RegisterPage";

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
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    }
]);