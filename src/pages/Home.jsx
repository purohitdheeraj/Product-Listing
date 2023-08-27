import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className="py-24">
			<section className="bg-gray-800 text-white py-24">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-semibold mb-4">
						Exquisite Jewelry for Every Occasion
					</h1>
					<p className="text-lg mb-8">
						Discover our stunning collection of handcrafted
						Products.
					</p>
					<Link
						to="/products"
						className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300"
					>
						Shop Now
					</Link>
				</div>
			</section>
		</div>
	);
};
