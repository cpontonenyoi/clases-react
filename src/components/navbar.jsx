import { Link, useNavigate } from "react-router-dom";

const style = {
    backgroundColor: 'white',
}

function Navbar() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }

    const simulatorChangeLocalstorage = () => {
        localStorage.setItem('rol', 'ADMIN');  
    }
    return (
        <nav style={style}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <a onClick={logout}>Logout</a>
            <a onClick={simulatorChangeLocalstorage}>Simulator</a>
        </nav>
    )
}

export default Navbar;