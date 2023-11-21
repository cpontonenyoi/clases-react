import { useNavigate } from "react-router-dom";

function useFetchAdmin() {
    const navigate = useNavigate();
    return async function({url, data, headers, method}) {

        const token = localStorage.getItem('token');
        headers = {
            ...headers,
            Authorization: token,
        }

        try {
            const response = await fetch(url, {
                method,
                body: JSON.stringify(data),
                headers
            });
    
            if(response.status === 403) {
                return navigate('/login');
            }
            
            return response.json();
        }catch(error) {
            console.log(error)
        }
    }
}

function useFetchClient() {
    const navigate = useNavigate('/login');
    const url = 'http://localhost:4000';
    return async function({path, data, headers, method}) {
        try {
            const token = localStorage.getItem('token');
            headers = {
                ...headers,
                Authorization: token,
            }

            const response = await fetch(url+path, {
                method,
                body: JSON.stringify(data),
                headers
            })
    
            if(response.status === 403) {
                return navigate('/login');
            }
            
    
            return response;
        }catch(error) {
            console.log(error)
        }
    }
}

export {
    useFetchAdmin,
    useFetchClient
};