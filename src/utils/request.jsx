import { useNavigate } from "react-router-dom";

function useFetchAdmin() {
    const navigate = useNavigate();
    return async function({url, data, headers, method}) {
        try {
            const response = await fetch(url, {
                method,
                body: JSON.stringify(data),
                headers
            })
    
            if(response.status === 403) {
                return navigate('/login');
            }
            
            return response.json();
        }catch(error) {
            console.log(error)
        }
    }
}

async function useFetchClient({url, data, headers, method}) {
    const navigate = useNavigate('/login');
    try {
        const response = await fetch(url, {
            method,
            body: JSON.stringify(data),
            headers
        })

        if(response.status === 403) {
            return navigate('/login');
        }
        

        return response.json();
    }catch(error) {
        console.log(error)
    }
}

export {
    useFetchAdmin,
    useFetchClient
};