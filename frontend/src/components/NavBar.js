import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../img/logo.png";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<nav className="fixed top-0 w-full bg-[rgba(51,51,51,0.6)] shadow-md transition-all duration-300 hover:bg-[#333] z-50">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<div className="flex justify-center lg:justify-between items-center w-full lg:w-auto">
					<Link
						to="/"
						className="flex items-center space-x-4"
					>
						<img
							src={Logo}
							alt="Logo"
							className="h-16 w-auto"
						/>
						<span className="text-xl font-bold text-white font-serif lg:block hidden">
							Naturalna Transformacja
						</span>
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleMenu}
					className="lg:hidden focus:outline-none"
				>
					{isOpen ? (
						<FaTimes className="w-6 h-6 text-white" />
					) : (
						<FaBars className="w-6 h-6 text-white" />
					)}
				</button>

				{/* Links */}
				<div
					className={`lg:flex lg:items-center lg:space-x-6 font-serif ${
						isOpen
							? "flex flex-col space-y-4 absolute top-16 left-0 right-0 bg-[#2e3046] p-5 z-10 shadow-md"
							: "hidden"
					}`}
				>
					{[
						"Strona główna",
						"O Nas",
						"Pakiety",
					].map((linkName) => (
						<Link
							key={linkName}
							to={`/${linkName
								.replace(/\s+/g, "-")
								.toLowerCase()}`}
							onClick={handleLinkClick}
							className="text-white hover:bg-[#444] transition-all duration-300 px-4 py-2 rounded-md text-lg font-medium"
						>
							{linkName}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
