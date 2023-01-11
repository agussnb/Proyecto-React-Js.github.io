const urlIndex = 'http://localhost:3000/'
function Navbar (){
return (
<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href={urlIndex}>|| Pro Tennis Equipment ||</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/productos">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/wilson">Wilson</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/head">Head</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/prince">Babolat</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link material-icons" href="/carrito">shopping_cart</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}

export default Navbar