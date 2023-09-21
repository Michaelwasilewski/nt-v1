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
		<div className="relative h-screen overflow-hidden">
			{/* Parallax background */}
			<div
				className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-gray-200"
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
				<div className="absolute inset-0"></div>
			</div>

			{/* Content container */}
			<div className="relative h-full flex flex-col justify-center items-center space-y-4 sm:space-y-6 lg:space-y-12 p-4 text-center">
				{/* Welcome Text */}
				<div>
					<h1 className="text-4xl font-sans sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-light mb-4 sm:mb-6">
						Witaj w{" "}
						<span className="text-white font-serif">
							Naturalna Transformacja
						</span>
					</h1>
					<p className="text-xl font-serif sm:text-2xl text-accent font-medium">
						Odkryj ścieżkę do wewnętrznego spokoju
						i samodoskonalenia.
					</p>
				</div>

				{/* Newsletter Signup */}
				<div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col space-y-4 sm:space-y-6">
					<h2 className="text-2xl sm:text-3xl text-light font-semibold">
						Pozostań z nami w kontakcie
					</h2>
					<div className="flex border border-light rounded-md overflow-hidden">
						<input
							type="email"
							placeholder="Wpisz swój e-mail"
							className="p-2 sm:p-3 text-base sm:text-lg flex-grow focus:outline-none"
						/>
						<button className="bg-accent text-white p-2 sm:p-3 px-4 sm:px-6 text-base sm:text-lg font-medium transition-colors hover:bg-highlight">
							Subskrybuj
						</button>
					</div>
				</div>

				{/* Calming Quote */}
				<blockquote className="text-xl sm:text-2xl text-darken font-light italic">
					"W środku ruchu i chaosu zachowuj
					wewnętrzną ciszę."
					<br />
					<span className="font-bold text-light">
						- Deepak Chopra
					</span>
				</blockquote>
			</div>
		</div>
	);
};

export default HeroSection;
