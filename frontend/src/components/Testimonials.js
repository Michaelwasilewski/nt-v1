import React, { useState } from "react";

const Testimonial = ({ name, text, avatar }) => {
	const [isExpanded, setIsExpanded] =
		useState(false);
	const maxHeight = isExpanded
		? "none"
		: "4.5rem"; // 4.5rem roughly equals 3 lines of text

	return (
		<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
			<img
				src={avatar}
				alt={name}
				className="w-24 h-24 rounded-full border-4 border-purple-300 mb-6"
			/>
			<div
				style={{
					maxHeight: maxHeight,
					overflow: "hidden",
				}}
			>
				<p className="text-lg text-gray-700 italic text-center mb-6">
					"{text}"
				</p>
			</div>
			<button
				onClick={() => setIsExpanded(!isExpanded)}
				className="mb-6 text-purple-500 hover:text-purple-600"
			>
				{isExpanded
					? "Czytaj mniej"
					: "Czytaj więcej"}
			</button>

			<p className="font-bold text-md text-purple-500">
				{name}
			</p>
		</div>
	);
};
const Testimonials = () => {
	const testimonials = [
		{
			name: "Justyna Miaskowska",
			text: "Z czystym sumieniem polecam współpracę z Tobą. Każda rozmowa to przyjemność. Szczególnie doceniam Cię za indywidualne podejście do każdej osoby, pełne ciepła i empatii oraz dobrze dobrane rady bez słów krytyki i negatywnej oceny. Widać, że masz doświadczenie w pracy z innymi ludźmi i dużo wiedzy do przekazania. Dziękuję za wszystko.",
			avatar: "https://i.pravatar.cc/150?img=47",
		},
		{
			name: "Angelika Lisowska",
			text: "Spotkania z Kingą to cudownie rozwijający czas, podczas którego możesz poczuć się zaopiekowany i wysłuchany. Kinga to ciepła i wspierająca osoba, czarodziejka. Kurs Naturalnej Transformacji, w którym biorę udział, to przełom w moim życiu, pomógł mi uporządkować rzeczy, które przeszkadzały mi od dawna, znaleźć potencjały życiowej energii i poczuć się szczęśliwym. Polecam go każdemu, kto chce uzdrowienia.",
			avatar: "https://i.pravatar.cc/150?img=20",
		},
		{
			name: "Iwona Jakobiuk",
			text: "Kinga jest pełna profesjonalizmu i zawsze przygotowana. Jej wskazówki pozwalają mi znaleźć rozwiązania, kiedy utknęłam na czymś. Dowiedziałam się wiele o sobie i procesach kształtujących moją osobowość. Dzięki małym krokom w kierunku mojego celu udało mi się zmienić podejście zero-jedynkowe. Dowiedziałam się, że nawet mały sukces ma znaczenie, a teraz go celebrować. Wystarczyło mi kilka ciepłych rozmów, żeby iść do przodu i łamać schematy.",
			avatar: "https://i.pravatar.cc/150?img=23",
		},
	];

	return (
		<div className="relative py-10 bg-white">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-gray-600 text-center mb-12">
					Co mówią nasi klienci
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					{testimonials.map(
						(testimonial, index) => (
							<Testimonial
								key={index}
								{...testimonial}
							/>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
