import { Link } from "react-router-dom"


function Navbar (){
return (
<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">|| Pro Tennis Equipment ||</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item" >
                <Link className="nav-link" to={"/category/1"}>Wilson</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/category/2`}>Head</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={`/category/3`}>Babolat</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link material-icons" to={`/carrito`}>shopping_cart</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}

export default Navbar