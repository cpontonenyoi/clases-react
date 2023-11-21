import { Navigate } from "react-router-dom";
import Clients from "../layouts/clients";

function ProtectRouterClient() {
    const token = localStorage.getItem('token');

    if(!token) {
        return (
            <Navigate to='/login' replace />
        )
    }

    return <Clients />
    
}

export default ProtectRouterClient;