import React, {
	useState,
	useEffect,
} from "react";

import HeroBackground from "../img/heroimg.jpg";

const HeroSection = () => {
	const [scrollY, setScrollY] = useState(0);

	const handleScroll = () => {
		setScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener(
			"scroll",
			handleScroll
		);
		return () =>
			window.removeEventListener(
				"scroll",
				handleScroll
			);
	}, []);
	const isSafari =
		/^((?!chrome|android).)*safari/i.test(
			navigator.userAgent
		);

	return (
		<div className="relative h-screen">
			{/* Parallax background */}
			<div
				className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-gray-200" // fallback bg-color and centering with Tailwind
				style={{
					backgroundImage: `url(${HeroBackground})`,
					transform: isSafari
						? "none"
						: `translateY(${scrollY * 0.9}px)`,
					backgroundAttachment: isSafari
						? "fixed"
						: "scroll",
				}}
			>
				{/* Darkened color overlay */}
				<div className="absolute inset-0 bg-black opacity-40"></div>
			</div>

			{/* Content container */}
			<div className="relative h-full flex flex-col justify-center items-center space-y-12 p-4 text-center">
				{/* Welcome Text */}
				<div>
					<h1 className="text-7xl font-extrabold text-purple-800 mb-6">
						Witaj w{" "}
						<span className="text-white">
							Naturalna Transformacja
						</span>
					</h1>
					<p className="text-2xl text-teal-500 font-medium">
						Odkryj ścieżkę do wewnętrznego spokoju
						i samodoskonalenia.
					</p>
				</div>

				{/* Newsletter Signup */}
				<div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col space-y-6">
					<h2 className="text-3xl text-purple-800 font-semibold">
						Pozostań z nami w kontakcie
					</h2>
					<div className="flex border border-purple-800 rounded-md overflow-hidden">
						<input
							type="email"
							placeholder="Wpisz swój e-mail"
							className="p-3 text-lg flex-grow focus:outline-none"
						/>
						<button className="bg-teal-500 text-purple-900 p-3 px-6 text-lg font-medium transition-colors hover:bg-teal-600">
							Subskrybuj
						</button>
					</div>
				</div>

				{/* Calming Quote */}
				<blockquote className="text-2xl text-teal-400 font-light italic">
					"W środku ruchu i chaosu zachowuj
					wewnętrzną ciszę."
					<br />
					<span className="font-bold text-purple-800">
						- Deepak Chopra
					</span>
				</blockquote>
			</div>
		</div>
	);
};

export default HeroSection;
