import { Link, NavLink } from "react-router-dom";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";
import Logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export const Header = () => {
	const [darkMode, setDarkMode] = useState(true);
	const [hidden, setHidden] = useState(true);

	const theme = darkMode ? (
		<img src={sunIcon} alt="sun icon" />
	) : (
		<img src={moonIcon} alt="moon icon" />
	);

	const handleTheme = () => {
		setDarkMode((prev) => !prev);
	};

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(darkMode));

		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	const activeClass = `block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`;

	const notActiveClass = `block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`;

	return (
		<div>
			<nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<Link
						to="https://jwero.ai/"
						className="flex items-center"
					>
						<img
							src={Logo}
							className="h-8 mr-3 border-2 dark:bg-slate-100"
							alt="Jwero Store"
						/>
					</Link>
					<button
						onClick={handleTheme}
						type="button"
						className="ml-auto mr-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm 
						dark:bg-gray-300
						bg
						text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:focus:ring-gray-600"
					>
						{theme}
					</button>
					<button
						onClick={() => {
							setHidden((prev) => !prev);
						}}
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
					<div
						className={`${
							hidden ? "hidden" : ""
						} w-full md:block md:w-auto`}
						id="navbar-default"
					>
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
							<li>
								<NavLink
									to="/"
									className={({ isActive }) => {
										return isActive
											? activeClass
											: notActiveClass;
									}}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/products"
									className={({ isActive }) => {
										return isActive
											? activeClass
											: notActiveClass;
									}}
								>
									Products
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/Cart"
									className={({ isActive }) => {
										return isActive
											? activeClass
											: notActiveClass;
									}}
								>
									Cart
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
