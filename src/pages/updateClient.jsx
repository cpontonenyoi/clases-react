import { useEffect, useState } from "react";
import { useFetchClient } from "../utils/request";
import { useNavigate, useParams } from "react-router-dom";

function UpdateClient() {
    const [client, setClient] = useState({
        id: '',
        name: '',
        email: '',
        address: '',
        phone: '',
    });

    const navigate = useNavigate();

    const fetchClient = useFetchClient();
    const { id } = useParams();

    useEffect(() => {
        fetchClient({ path: `/client/${id}`, method: "GET" }).then(response => {
            response.json().then(setClient);
        });
    }, [])

    const onSubmit = async (event) => {
        event.preventDefault();
        const response = await fetchClient({
            path: `/client/${client.id}`, data: client,
            headers: {
                "Content-Type": 'application/json'
            },
            method: 'PUT'
        });

        if (response.status > 300) {
            //TODO: create alert
            console.error('Hubo un error con la petición');
        }
        navigate('/client');
    }

    const onChange = (event) => {
        setClient({
            ...client,
            [event.target.id]: event.target.value
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                {client.name}
                <label htmlFor="name">Nombre:</label>
                <input type="text" onChange={onChange} value={client.name} id="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={onChange} value={client.email} id="email" />
                <label htmlFor="address">Dirección:</label>
                <input type="text" onChange={onChange} value={client.address} id="address" />
                <label htmlFor="phone">Teléfono:</label>
                <input type="number" onChange={onChange} value={client.phone} id="phone" />

                <button type="submit">Update Usuario</button>
            </form>
        </>
    )
}

export default UpdateClient;