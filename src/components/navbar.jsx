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

    return (
        <nav style={style}>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            
            <Link to="/client">Client</Link>
            <Link onClick={logout}>Logout</Link>
        </nav>
    )
}

export default Navbar;