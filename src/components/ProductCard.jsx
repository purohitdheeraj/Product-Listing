import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

export const ProductCard = (props) => {
	const { image, title, price } = props.product;

	const { addToCart } = useCart();

	return (
		<div className="flex flex-col border p-2 rounded-lg ">
			<a href="#" className="group mb-2">
				<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
					<img
						src={image}
						alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
						className=" sm:h-72 w-full object-cover object-center group-hover:opacity-75"
					/>
				</div>
				<h3 className="mt-4 text-lg text-gray-700 dark:text-white">
					{title}
				</h3>
				<p className="mt-1 text-lg font-medium text-gray-900 dark:text-gray-400">
					${price}
				</p>
			</a>

			<button
				onClick={() => addToCart(props.product)}
				type="button"
				className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-auto"
			>
				Add to Bag
			</button>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object,
	title: PropTypes.string,
	price: PropTypes.number,
};
