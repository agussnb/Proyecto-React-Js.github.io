
function Card(){
    return (
           <>
           {[<div className="card">
                <img className="card-img-top" src="imagenes/pelota-wilson-triniti.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Pelotas Wilson</h5>
                        <p className="card-text">Tubo de pelotas Wilson Triniti</p>
                    </div>
            </div>,
            <div className="card">
                <img className="card-img-top" src="imagenes/pelota-tenis-head.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Pelotas Head</h5>
                        <p className="card-text">Tubo de pelotas Head Tour Xt</p>
                    </div>
            </div>,
            <div className="card">
                <img className="card-img-top" src="imagenes/pelota-tenis-babolat.jpg" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">Pelotas Babolat</h5>
                        <p className="card-text">Tubo de pelotas Babolat Team</p>
                    </div>
            </div>]}
           </>
    )
}

export default Card;


