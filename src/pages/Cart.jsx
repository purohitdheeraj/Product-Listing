import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Cart = () => {
	const { cart, removeFromCart } = useCart();

	return (
		<ul className="px-4 py-24 flex flex-col gap-4">
			{cart.length < 1 && (
				<div>
					<h2>Cart is Empty</h2>
					<Link
						to="/products"
						className="text-blue-500 underline"
					>
						take me to products
					</Link>
				</div>
			)}

			{cart.map((product) => (
				<li
					key={product.id}
					className=" border rounded-md justify-between h-36  py-5 flex items-center p-4"
				>
					<img
						src={product.image}
						className="h-24 w-24 border"
						alt="product-img"
					/>
					<div className="mr-auto ml-4">
						<h3 className="text-md">{product.title}</h3>
						<button
							onClick={() => removeFromCart(product.id)}
							type="button"
							className="block mt-4 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
						>
							Remove
						</button>
					</div>
					<div>
						<p>Price : ${product.price.toFixed(2)}</p>
						<p>Quantity:{product.quantity}</p>
					</div>
				</li>
			))}
		</ul>
	);
};
