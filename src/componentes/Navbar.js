function Navbar (){
return (
<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="index.html">|| Pro Tennis Equipment ||</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/public/raquetas.html">Raquetas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="wilson.html">Wilson</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="head.html">Head</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="prince.html">Babolat</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}

export default Navbar