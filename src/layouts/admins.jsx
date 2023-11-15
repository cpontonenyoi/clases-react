import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useFetchAdmin } from "../utils/request";

function Admins() {

    const fetchAdmin = useFetchAdmin();
    useEffect(() => {
        const token = localStorage.getItem('token');
        fetchAdmin({url: 'http://localhost:4000/admin', headers: {
            authorization: token,
        }})
    })
    return (
        <>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Admins;