import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function Clients() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Clients;