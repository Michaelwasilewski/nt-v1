import React from "react";
import Slider from "react-slick";

import Background1 from "../img/onlinecourse.jpg";
import Background2 from "../img/healing.jpg";
import Background3 from "../img/gestalt.jpg";
import Background4 from "../img/detox.jpg";

const ParallaxSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		nextArrow: <SliderArrow direction="next" />,
		prevArrow: <SliderArrow direction="prev" />,
	};

	return (
		<Slider {...settings}>
			{slideContents.map((content, index) => (
				<Slide
					key={index}
					content={content}
					background={backgrounds[index]}
				/>
			))}
		</Slider>
	);
};

const backgrounds = [
	Background1,
	Background2,
	Background3,
	Background4,
];
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

const Slide = ({ content, background }) => (
	<div
		className="relative flex items-center justify-center h-screen bg-cover bg-center"
		style={{
			backgroundImage: `url(${background})`,
		}}
	>
		<div className="absolute inset-0 bg-black opacity-50"></div>
		<div className="z-10 text-center p-4">
			<h2 className="text-4xl text-white font-bold mb-4 animate__animated animate__fadeInDown">
				{content.title}
			</h2>
			<p className="text-xl text-white mb-4 animate__animated animate__fadeInUp">
				{content.description}
			</p>
			<a
				href={content.ctaLink}
				className="bg-primary text-white py-2 px-4 text-lg font-medium rounded-full hover:bg-highlight transition-all duration-300 shadow-lg transform hover:scale-105"
			>
				{content.ctaText}
			</a>
		</div>
	</div>
);

const SliderArrow = ({ direction, onClick }) => {
	const icon = direction === "next" ? ">" : "<";
	const className =
		direction === "next" ? "right-10" : "left-10";

	return (
		<span
			className={`absolute top-1/2 ${className} transform -translate-y-1/2 z-50  text-white p-2 rounded-full cursor-pointer shadow-lg`}
			style={{ fontSize: "2rem" }}
			onClick={onClick}
		>
			{icon}
		</span>
	);
};

export default ParallaxSlider;
