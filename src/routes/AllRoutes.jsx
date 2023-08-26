import { Routes, Route } from "react-router-dom";
import { Cart, Products } from "../pages";

export const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<h1>Home Page</h1>} />
				<Route path="/products" element={<Products />} />
				<Route
					path="/products/:id"
					element={<h3>Product Card</h3>}
				/>
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
};
