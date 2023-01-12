import { Link } from "react-router-dom";
function Card(){
return (
<>
  {/* --------------------------------------------------------R-A-Q-U-E-T-A-S------------------------------------------------------------------------ */}
    <div className="card-group">
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/raquetaWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Raqueta Wilson</h5>
                <p className="card-text">Wilson Blade 98 V7</p>
                <Link className='linkProductos text-white' to={"/Productos/raquetaWilson"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/raquetaHead.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Raqueta Head</h5>
                <p className="card-text">Head Gravity MP Lite</p>
                <Link className='linkProductos text-white' to={"/Productos/raquetaHead"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/raquetaBabolat.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Raqueta Babolat</h5>
                <p className="card-text">Babolat Pure Aero Rafa</p>
                <Link className='linkProductos text-white' to={"/Productos/raquetaBabolat"}>ver mas</Link>
            </div>
        </div>
    </div>
 {/* --------------------------------------------------------P-E-L-O-T-A-S------------------------------------------------------------------------- */}
    <div className="card-group">
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/tuboWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Pelotas Wilson</h5>
                <p className="card-text">Tubo de pelotas Wilson Triniti</p>
                <Link className='linkProductos text-white' to={"/Productos/tuboWilson"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/tuboHead.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Pelotas Head</h5>
                <p className="card-text">Tubo de pelotas Head Tour Xt</p>
                <Link className='linkProductos text-white' to={"/Productos/tuboHead"}>ver mas</Link>
            </div>
        </div>,
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/tuboBabolat.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Pelotas Babolat</h5>
                <p className="card-text">Tubo de pelotas Babolat Team</p>
                <Link className='linkProductos text-white' to={"/Productos/tuboBabolat"}>ver mas</Link>
            </div>
        </div>
    </div>
     {/* --------------------------------------------------------R-A-Q-U-E-T-E-R-O-S---------------------------------------------------------------------- */}
    <div className="card-group">
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/raqueteroWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Raquetero Wilson</h5>
                <p className="card-text">Raquetero DNA Federer, ideal para tus raquetas Wilson</p>
                <Link className='linkProductos text-white' to={"/Productos/raqueteroWilson"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/raqueteroHead.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Raquetero Head</h5>
                <p className="card-text">Raquetero Elite All Court, ideal para tus raquetas Head</p>
                <Link className='linkProductos text-white' to={"/Productos/raqueteroHead"}>ver mas</Link>
            </div>
        </div>,
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/raqueteroBabolat.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Raquetero Babolat</h5>
                <p className="card-text">Raquetero RH6 Pure Drive, ideal para tus raquetas Babolat</p>
                <Link className='linkProductos text-white' to={"/Productos/raqueteroBabolat"}>ver mas</Link>
            </div>
        </div>
    </div>
    {/* --------------------------------------------------------C-E-S-T-O-S-D-E-P-E-L-O-T-A-S----------------------------------------------------------------- */}
    <div className="card-group">
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/cestoWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Cesto para pelotas Wilson</h5>
                <p className="card-text">Cesto para guardar tus pelotas Wilson</p>
                <Link className='linkProductos text-white' to={"/Productos/cestoWilson"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/cestoHead.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Cesto para pelotas Head</h5>
                <p className="card-text">Cesto para guardar tus pelotas Head</p>
                <Link className='linkProductos text-white' to={"/Productos/cestoHead"}>ver mas</Link>
            </div>
        </div>,
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/cestoBabolat.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Cesto para pelotas Babolat</h5>
                <p className="card-text">Cesto para guardar tus pelotas Babolat</p>
                <Link className='linkProductos text-white' to={"/Productos/cestoBabolat"}>ver mas</Link>
            </div>
        </div>
    </div>
     {/* --------------------------------------------------------B-O-L-S-O-S----------------------------------------------------------------------------------- */}
     <div className="card-group">
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/bolsoWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Bolso Wilson</h5>
                <p className="card-text">Bolso Clash Small Duffel Wilson</p>
                <Link className='linkProductos text-white' to={"/Productos/bolsoWilson"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/cestoHead.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Bolso Head</h5>
                <p className="card-text">Bolso Coco Duffle Bag Head</p>
                <Link className='linkProductos text-white' to={"/Productos/bolsoHead"}>ver mas</Link>
            </div>
        </div>,
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/cestoBabolat.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Bolso Babolat</h5>
                <p className="card-text">Bolso M Pure Drive Babolat</p>
                <Link className='linkProductos text-white' to={"/Productos/bolsoBabolat"}>ver mas</Link>
            </div>
        </div>
    </div>
    {/* --------------------------------------------------------E-N-C-O-R-D-A-D-O-S------------------------------------------------------------------------------ */}
    <div className="card-group">
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/cuerdasWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Cuerdas Wilson</h5>
                <p className="card-text">Rollo de cuerdas Element 16 de 200M Wilson</p>
                <Link className='linkProductos text-white' to={"/Productos/cuerdasWilson"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/cuerdasHead.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Cuerdas Head</h5>
                <p className="card-text">Rollo de cuerdas Hawk de 200M Head</p>
                <Link className='linkProductos text-white' to={"/Productos/cuerdasHead"}>ver mas</Link>
            </div>
        </div>,
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/cuerdasBabolat.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Cuerdas Babolat</h5>
                <p className="card-text">Rollo de cuerdas RPM Hurricane de 200M Babolat</p>
                <Link className='linkProductos text-white' to={"/Productos/bolsoBabolat"}>ver mas</Link>
            </div>
        </div>
    </div>
     {/* --------------------------------------------------------G-R-I-P-S---------------------------------------------------------------------------------------- */}
     <div className="card-group">
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/gripWilson.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Grip Wilson</h5>
                <p className="card-text">Grip Sublime Wilson</p>
                <Link className='linkProductos text-white' to={"/Productos/gripWilson"}>ver mas</Link>
            </div>
        </div>
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/gripHead.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Grip Head</h5>
                <p className="card-text">Grip Leather Tour Head</p>
                <Link className='linkProductos text-white' to={"/Productos/gripHead"}>ver mas</Link>
            </div>
        </div>,
        <div className="card bg-dark">
            <img className="card-img-top" src="imagenes/gripBabolat.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title text-white">Grip Babolat</h5>
                <p className="card-text">Grip Syntec Uptake Babolat</p>
                <Link className='linkProductos text-white' to={"/Productos/gripBabolat"}>ver mas</Link>
            </div>
        </div>
    </div>
</>
)
}

export default Card;

