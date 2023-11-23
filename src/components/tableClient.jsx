import { useContext, useEffect, useState } from "react"
import { useFetchClient } from "../utils/request";
import { Link } from "react-router-dom";
import { ClientContext } from "../contexts/client.context";

function TableClient() {
    const fetchClient = useFetchClient();

    const {clients, setClients} = useContext(ClientContext);

    useEffect(() => {
        fetchClient({path:'/client'}).then(response => {
            response.json().then(setClients);
        })
    }, []);

    const deleteClient = async (id) => {
        await fetchClient({path:`/client/${id}`, method:'DELETE'});
        const response = await fetchClient({ path: '/client' });
        response.json().then(setClients);
    }
    return(
        <>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Acción</th>
                </tr>

                {clients.map((client, i) => (
                    <tr key={i}>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                        <td>{client.address}</td>
                        <td>{client.phone}</td>
                        <td><Link onClick={() => deleteClient(client.id)}>Eliminar</Link> 
                        <Link to={`/client/${client.id}`} >Editar</Link></td>
                    </tr>
                ))}
            </table>
        </>
    )
}

export default TableClient;