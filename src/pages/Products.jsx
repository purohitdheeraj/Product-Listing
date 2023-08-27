import { useState, useEffect } from "react";
import { ProductCard, Search } from "../components";

const Products = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [products, setProducts] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/")
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const filterProductsByTitle = (products, query) => {
		return products.filter((product) =>
			product.title
				.toLowerCase()
				.includes(query.toLowerCase())
		);
	};

	const handleSearchQuery = (e) => {
		const { value } = e.target;
		setSearchQuery(value);

		const filteredData = filterProductsByTitle(
			products,
			searchQuery
		);
		setFilteredData(filteredData);
	};

	const displayData = searchQuery ? filteredData : products;

	return (
		<div>
			<Search
				handleSearchQuery={handleSearchQuery}
				searchQuery={searchQuery}
			/>

			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 dark:bg-gray-800">
				<h2 className="sr-only">Products</h2>
				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
					{displayData.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))}

					{searchQuery && filteredData.length === 0 && (
						<div>No Products found</div>
					)}
				</div>
			</div>
		</div>
	);
};

export { Products };
