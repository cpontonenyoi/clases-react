import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();

    const [infoLogin, setInfoLogin] = useState({
        email: '',
        password: '',
    });

    const login = async () => {
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(infoLogin)
        });

        if(response.status === 200) {
            const responseJson = await response.json();
            localStorage.setItem('token', responseJson.token);
            localStorage.setItem('rol', responseJson.rol);
            if(responseJson.rol === 'ADMIN') {
                navigate('/admin');
            }else {
                navigate('/');
            }
            
        }else {
            console.log('error');
        }
    }

    const onChangeInput = (event) => {
        setInfoLogin({
            ...infoLogin,
            [event.target.id]: event.target.value
        });
    }

    return(
        <>
            <label htmlFor="email">email:</label>
            <input type="text" id="email" onChange={onChangeInput} />
            <label htmlFor="password">password:</label>
            <input type="password" id="password" onChange={onChangeInput} />

            <button type="button" onClick={login}>Login</button>
        </>
    )
}

export default Login;