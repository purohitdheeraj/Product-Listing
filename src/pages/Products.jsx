import { useState, useEffect } from 'react';
import { ProductCard, Search } from '../components';

// not useful in this case - sarry
const useDebounce = (initialValue) => {
	const [state, setState] = useState(initialValue);

	useEffect(() => {
		const handler = setTimeout(() => {
			setState(initialValue);
		}, 3000);

		return () => clearTimeout(handler);
	}, [initialValue]);

	return state;
};

const Products = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [products, setProducts] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [sortByState, setSortByState] = useState('high');

	const debouncedValue = useDebounce(searchQuery);

	console.log(debouncedValue);

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
				.includes(String(searchTerm))
		);

		setFilteredData(newData);
	};

	// const displayData = searchQuery ? filteredData : products;
	const sortByLowPrice = () => {
		const sortByLowPriceArr = [...filteredData].sort(
			(a, b) => a.price - b.price
		);
		setFilteredData(sortByLowPriceArr);
	};

	const sortByHighPrice = () => {
		const sortByHighPriceArr = [...filteredData].sort(
			(a, b) => b.price - a.price
		);
		setFilteredData(sortByHighPriceArr);
	};

	const handlePriceSort = (e) => {
		const { value } = e.target;
		setSortByState(value);

		if (value === 'low') {
			sortByLowPrice();
		}

		if (value === 'high') {
			sortByHighPrice();
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
