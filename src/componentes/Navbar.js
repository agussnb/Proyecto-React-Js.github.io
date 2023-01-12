import { Link } from "react-router-dom"

function Navbar (){
return (
<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        <Link className="navbar-brand" to="Home">|| Pro Tennis Equipment ||</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/Productos">Productos</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Wilson">Wilson</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Head">Head</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Babolat">Babolat</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link material-icons" to="/Carrito">shopping_cart</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}

export default Navbar