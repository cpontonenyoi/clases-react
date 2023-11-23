import { useContext, useState } from "react";
import { useFetchClient } from "../utils/request";
import { ClientContext } from "../contexts/client.context";

function FormClient() {
    const [client, setClient] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const fetchClient = useFetchClient();

    const {clients, setClients} = useContext(ClientContext);

    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await fetchClient({path: '/client', data: client, 
            headers: {
                "Content-Type": 'application/json'
            },
            method: 'POST'
        });

        if (response.status > 300) {
            //TODO: create alert
            console.error('Hubo un error con la petición');
        }
        
        const responseJSON = await response.json();

        if(responseJSON.status === 'success') {
            setClients([
                ...clients,
                responseJSON.client
            ])
        }
    }

    const onChange =  (event) => {
        setClient({
            ...client,
            [event.target.id]: event.target.value
        })
    }
    return(
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input type="text" onChange={onChange} id="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={onChange} id="email" />
                <label htmlFor="address">Dirección:</label>
                <input type="text" onChange={onChange} id="address" />
                <label htmlFor="phone">Teléfono:</label>
                <input type="number" onChange={onChange} id="phone" />

                <button type="submit">Crear Usuario</button>
            </form>
        </>
    )
}

export default FormClient;