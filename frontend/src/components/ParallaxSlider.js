import React from "react";
import Slider from "react-slick";
import { Parallax } from "react-scroll-parallax";

import Background1 from "../img/onlinecourse.jpg";
import Background2 from "../img/healing.jpg";
import Background3 from "../img/gestalt.jpg";

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
	];

	return (
		<Slider {...settings}>
			{slideContents.map((content, index) => (
				<div
					key={index}
					className="relative h-screen"
				>
					<Parallax y={[-20, 20]}>
						<img
							src={
								[
									Background1,
									Background2,
									Background3,
								][index]
							}
							alt={`Slide ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</Parallax>

					{/* Overlay content */}
					<div className="absolute inset-0 flex flex-col justify-center items-center p-6">
						{" "}
						{/* Removed bg-opacity-30 */}
						<h2 className="text-5xl text-white font-bold mb-4 shadow-text">
							{content.title}
						</h2>
						<p className="text-2xl text-white mb-5 shadow-text">
							{content.description}
						</p>
						<a
							href={content.ctaLink}
							className="bg-white py-2 px-6 text-xl text-[#333] font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg"
						>
							{content.ctaText}
						</a>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default ParallaxSlider;
