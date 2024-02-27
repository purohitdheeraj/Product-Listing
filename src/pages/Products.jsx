import { useState, useEffect } from 'react';
import { ProductCard, Search } from '../components';

const Products = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [products, setProducts] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		console.log('logged');
		fetch('https://fakestoreapi.com/products/')
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setProducts(data);
				setFilteredData(data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	// const filterProductsByTitle = (products, query) => {
	// 	return products.filter((product) =>
	// 		product.title
	// 			.toLowerCase()
	// 			.includes(query.toLowerCase())
	// 	);
	// };

	const handleSearchQuery = (e) => {
		const searchTerm = e.target.value;
		setSearchQuery(searchTerm);
		// const filterKeys = '';
		const newData = products.filter((product) =>
			product.title
				.toLowerCase()
				.includes(String(searchTerm.toLowerCase()))
		);

		setFilteredData(newData);
	};

	// const displayData = searchQuery ? filteredData : products;

	const handlePriceSort = (e) => {
		const { name, value } = e.target;

		if (value === 'low') {
			const sortByLowPrice = [...filteredData].sort(
				(a, b) => a.price - b.price
			);
			setFilteredData(sortByLowPrice);
		}

		if (value === 'high') {
			const sortByHighPrice = [...filteredData].sort(
				(a, b) => b.price - a.price
			);
			setFilteredData(sortByHighPrice);
		}
	};

	return (
		<div>
			<div className="pt-28">
				<Search
					handleSearchQuery={handleSearchQuery}
					searchQuery={searchQuery}
				/>

				<div>
					<label htmlFor="high">high to low</label>
					<input
						onChange={handlePriceSort}
						type="radio"
						name="priceSort"
						id="high"
						value="high"
					/>
					<label htmlFor="low">low to high</label>
					<input
						onChange={handlePriceSort}
						type="radio"
						name="priceSort"
						id="low"
						value="low"
					/>
				</div>
			</div>

			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 dark:bg-gray-800">
				<h2 className="sr-only">Products</h2>
				<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
					{filteredData.map((product) => (
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
