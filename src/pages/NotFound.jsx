import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="py-24">
			<section className="bg-gray-800 text-white py-24">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-semibold mb-4">
						Page Not Found
					</h1>
					<p className="text-lg mb-8">
						Are You Looking for some products ? go to
						products page
					</p>
					<Link
						to="/products"
						className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-300"
					>
						Products page
					</Link>
				</div>
			</section>
		</div>
	);
};
