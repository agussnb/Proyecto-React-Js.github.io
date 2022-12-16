function Navbar (){
return (
<nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="raquetas.html">Raquetas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="wilson.html">Wilson</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="head.html">Head</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="prince.html">Prince</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
)
}

export default Navbar