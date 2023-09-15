import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-[#e0e7f1] shadow-md">
			<div className="container mx-auto px-4 py-8 flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
				{/* Logo and Description */}
				<div className="w-full lg:w-1/4 mb-4">
					<Link
						to="/"
						className="flex items-center space-x-3"
					>
						<img
							src="/path-to-your-logo.png"
							alt="Logo"
							className="h-10 w-10"
						/>
						<span className="text-2xl font-medium text-[#495057]">
							Naturalna Transformacja
						</span>
					</Link>
				</div>

				{/* Newsletter */}
				<div className="w-full lg:w-1/3 mb-4">
					<h2 className="text-[#495057] font-medium text-lg mb-3">
						Sign up for our Newsletter
					</h2>
					<div className="flex border rounded-md overflow-hidden">
						<input
							type="email"
							placeholder="Enter your email"
							className="p-2 flex-grow focus:outline-none"
						/>
						<button className="bg-[#495057] text-white p-2 px-5 transition-colors hover:bg-[#333]">
							Sign Up
						</button>
					</div>
				</div>

				{/* Links */}
				<div className="w-full lg:w-1/3 flex flex-wrap justify-center space-x-0 lg:space-x-6 space-y-4 lg:space-y-0">
					{[
						"Strona główna",
						"O Nas",
						"Pakiety",
						"Kontakt",
					].map((text, index) => (
						<Link
							key={index}
							to="/"
							className="text-[#495057] hover:bg-[#d1dbe5] hover:text-[#333] transition-colors duration-300 px-4 py-2 rounded-md"
						>
							{text}
						</Link>
					))}
				</div>

				{/* Copyright */}
				<div className="w-full mt-6 text-center">
					<span className="text-[#495057] text-sm">
						&copy; {new Date().getFullYear()}{" "}
						Naturalna Transformacja. Wszystkie
						prawa zastrzeżone.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
