import { Navigate } from "react-router-dom";
import Clients from "../layouts/clients";

function ProtectRouterClient() {
    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');

    if(!token || rol !== 'CLIENT') {
        return (
            <Navigate to='/login' replace />
        )
    }

    return <Clients />
    
}

export default ProtectRouterClient;