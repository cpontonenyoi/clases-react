import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ProtectRouterClient from "./components/ProtectRouterClient";
import ProtectRouterAdmin from "./components/ProtectRouterAdmin";
import Dashboard from "./pages/dashboard";
import Client from "./pages/client";
import UpdateClient from "./pages/updateClient";

const router = createBrowserRouter([
    {
        path: '/',
        Component: ProtectRouterClient,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/contact',
                Component: Contact
            },
            {
                path: '/client',
                Component: Client
            },
            {
                path: '/client/:id',
                Component: UpdateClient
            }
        ]
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: '/admin',
        Component: ProtectRouterAdmin,
        children: [
            {
                path: '/admin',
                Component: Dashboard
            }
        ]
    }
])

export default router;