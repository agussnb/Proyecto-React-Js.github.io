import React from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "./CustomProvider";

const CartWidget = () => {
	const {totalProductos} = useCarrito()

	return (
		<Link className="nav-link" to={`/cart`}>
		  <span className="material-icons shopping-cart-icon">shopping_cart</span>
		  {totalProductos > 0 && (
			<span className="product-count">{totalProductos}</span>
		  )}
		</Link>
	  );
};

export default CartWidget;