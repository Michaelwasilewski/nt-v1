import React from "react";
import Slider from "react-slick";

import Background1 from "../img/onlinecourse.jpg";
import Background2 from "../img/healing.jpg";
import Background3 from "../img/gestalt.jpg";
import Background4 from "../img/detox.jpg";

const ParallaxSlider = () => {
	const NextArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					fontSize: "2em",
					right: "10px",
				}}
				onClick={onClick}
			>
				▶
			</div>
		);
	};

	const PrevArrow = (props) => {
		const { className, style, onClick } = props;
		return (
			<div
				className={className}
				style={{
					...style,
					fontSize: "2em",
					left: "10px",
					zIndex: "2",
				}}
				onClick={onClick}
			>
				◀
			</div>
		);
	};

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	const slideContents = [
		{
			title: "Kurs online",
			description:
				"Dowiedz się więcej o naszych kursach online...",
			ctaText: "Odkryj kursy",
			ctaLink: "/kursy",
		},
		{
			title: "Wyjazd",
			description:
				"Poznaj nasze programy wyjazdowe...",
			ctaText: "Znajdź wyjazd",
			ctaLink: "/wyjazdy",
		},
		{
			title: "Gestalt",
			description: "Zrozum zasady Gestalt...",
			ctaText: "Dowiedz się więcej",
			ctaLink: "/gestalt",
		},
		{
			title: "Simple Detox",
			description: "Zrozum zasady Gestalt...",
			ctaText: "Dowiedz się więcej",
			ctaLink: "/detox",
		},
	];

	return (
		<Slider {...settings}>
			{slideContents.map((content, index) => (
				<div
					key={index}
					className="relative flex items-center justify-center h-[50vh] sm:h-[75vh] md:h-[85vh]"
				>
					<div className="absolute inset-0 z-0">
						<img
							src={
								[
									Background1,
									Background2,
									Background3,
									Background4,
								][index]
							}
							alt={`Slide ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Overlay content */}
					<div className="absolute inset-0 z-10 flex items-center justify-center">
						<div className="text-center p-3">
							<h2 className="text-2xl sm:text-4xl md:text-5xl text-white font-bold mb-2 sm:mb-4 md:mb-5 shadow-text">
								{content.title}
							</h2>
							<p className="text-base sm:text-2xl text-white mb-2 sm:mb-4 md:mb-5 shadow-text">
								{content.description}
							</p>
							<a
								href={content.ctaLink}
								className="bg-white py-1 px-3 sm:py-2 sm:px-4 md:py-2 md:px-6 text-sm sm:text-base md:text-xl text-[#333] font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg"
							>
								{content.ctaText}
							</a>
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default ParallaxSlider;
