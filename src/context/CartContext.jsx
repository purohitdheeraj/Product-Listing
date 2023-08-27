import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item) => {
		const itemExist = cart.findIndex(
			(product) => product.id === item.id
		);

		if (itemExist === -1) {
			setCart((prev) => [
				...prev,
				{ ...item, quantity: 1 },
			]);
		} else {
			const handleSameProduct = cart.map((product) => {
				return product.id === item.id
					? {
							...product,
							price: product.price + item.price,
							quantity: product.quantity + 1,
					  }
					: product;
			});
			setCart(handleSameProduct);
		}
	};

	const removeFromCart = (itemID) => {
		setCart((prev) =>
			prev.filter((product) => {
				return product.id !== itemID;
			})
		);
	};

	const cartValue = {
		cart,
		addToCart,
		removeFromCart,
	};

	return (
		<CartContext.Provider value={cartValue}>
			{children}
		</CartContext.Provider>
	);
};

const useCart = () => {
	return useContext(CartContext);
};

CartContextProvider.propTypes = {
	children: PropTypes.object,
};

export { useCart, CartContextProvider };
