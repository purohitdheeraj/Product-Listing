import { Routes, Route } from "react-router-dom";
import { Cart, Home, Products } from "../pages";
import { NotFound } from "../pages/NotFound";

export const AllRoutes = () => {
	return (
		<div className="jewro-main-layout max-w-7xl mx-auto">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
				<Route
					path="/products/:id"
					element={<h3>Product Card</h3>}
				/>
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};
