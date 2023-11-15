import { Navigate } from "react-router-dom";
import Admins from "../layouts/admins";

function ProtectRouterAdmin() {
    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');

    if(!token || rol !== 'ADMIN') {
        return (
            <Navigate to='/login' replace />
        )
    }

    return <Admins />
    
}

export default ProtectRouterAdmin;