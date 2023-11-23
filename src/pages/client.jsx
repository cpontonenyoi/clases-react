import { useState } from "react";
import FormClient from "../components/formClient";
import TableClient from "../components/tableClient";
import { ClientContext } from "../contexts/client.context";

function Client() {
    const [clients, setClients] = useState([]);

    return (
        <ClientContext.Provider value={{clients, setClients}}>
            <FormClient />
            <TableClient />
        </ClientContext.Provider>
    )
}

export default Client;