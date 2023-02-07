import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {
	const {totalProductos, setTotalProductos} = useCarrito()

	return (
		<>
		<Link className="nav-link material-icons" to={`/carrito`}>shopping_cart
	{totalProductos}</Link>
		</>
	);
};

export default CartWidget;