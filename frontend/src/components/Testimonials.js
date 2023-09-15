import React from "react";

const Testimonials = () => {
	const testimonials = [
		{
			name: "Jan Kowalski",
			text: "Ten program zmienił moje życie. Techniki i lekcje są po prostu bezcenne!",
			avatar: "path_to_johns_avatar.jpg",
		},
		{
			name: "Anna Nowak",
			text: "Znalazłem nową perspektywę życia po uczestnictwie w rekolekcjach. Gorąco polecam!",
			avatar: "path_to_janes_avatar.jpg",
		},
		{
			name: "Alicja Biała",
			text: "Kursy online są dobrze zorganizowane, a instruktorzy są niezwykle kompetentni.",
			avatar: "path_to_alices_avatar.jpg",
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
							<div
								key={index}
								className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<img
									src={testimonial.avatar}
									alt={testimonial.name}
									className="w-24 h-24 rounded-full border-4 border-purple-300 mb-6"
								/>
								<p className="text-lg text-gray-700 italic text-center mb-6">
									"{testimonial.text}"
								</p>
								<p className="font-bold text-md text-purple-500">
									{testimonial.name}
								</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
