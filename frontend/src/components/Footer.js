import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Footer = () => {
	return (
		<footer className="bg-secondary p-6">
			<div className="container mx-auto flex flex-wrap justify-between items-center">
				{/* Logo */}
				<div className="flex items-center mb-6">
					<Link to="/">
						<img
							src={Logo}
							alt="Logo"
							className="h-16 w-auto"
						/>
					</Link>
					<div className="ml-4 text-white">
						<h2 className="text-xl font-semibold">
							Natural Therapies
						</h2>
						<p className="text-sm mt-1">
							Przynoszenie naturalnego uzdrowienia
							dla Ciebie.
						</p>
					</div>
				</div>

				{/* Newsletter */}
				<div className="mb-6 w-full md:w-2/5">
					<h2 className="text-white font-medium text-lg mb-3">
						Zapisz się do naszego newslettera
					</h2>
					<div className="flex border rounded-md overflow-hidden bg-white">
						<input
							type="email"
							placeholder="Wpisz swój e-mail"
							className="p-2 flex-grow focus:outline-none"
						/>
						<button className="bg-primary text-white p-2 px-5 hover:bg-opacity-80 transition ease-in-out duration-300">
							Subskrybuj
						</button>
					</div>
				</div>

				{/* Navigation Links */}
				<div className="mb-6 w-full md:w-2/5 flex flex-wrap justify-between">
					{[
						"Strona główna",
						"O Nas",
						"Pakiety",
						"Kontakt",
					].map((text, index) => (
						<Link
							key={index}
							to="/"
							className="text-primary hover:underline mb-2"
						>
							{text}
						</Link>
					))}
				</div>

				{/* Copyright */}
				<div className="w-full border-t border-opacity-30 mt-6 pt-6 text-center">
					<span className="text-primary text-sm">
						&copy; {new Date().getFullYear()}{" "}
						Natural Therapies. Wszystkie prawa
						zastrzeżone.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
