import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function Admins() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Admins;