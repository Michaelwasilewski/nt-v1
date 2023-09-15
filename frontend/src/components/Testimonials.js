import React from "react";
import { Parallax } from "react-scroll-parallax";

const Testimonials = () => {
	const testimonials = [
		{
			name: "John Doe",
			text: "This program changed my life. The techniques and lessons are simply invaluable!",
			avatar: "path_to_johns_avatar.jpg",
		},
		{
			name: "Jane Smith",
			text: "I've found a new perspective on life after attending the retreat. Highly recommended!",
			avatar: "path_to_janes_avatar.jpg",
		},
		{
			name: "Alice White",
			text: "The online courses are well-structured and the instructors are extremely knowledgeable.",
			avatar: "path_to_alices_avatar.jpg",
		},
	];

	return (
		<div className="relative py-20">
			<Parallax y={[-10, 10]} tagOuter="figure">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl font-bold text-center mb-12">
						What Our Clients Say
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
						{testimonials.map(
							(testimonial, index) => (
								<div
									key={index}
									className="flex flex-col items-center p-8  rounded-lg shadow-lg"
								>
									<img
										src={testimonial.avatar}
										alt={testimonial.name}
										className="w-24 h-24 rounded-full border-4 border-gray-300 mb-6"
									/>
									<p className="text-lg text-purple-100 italic text-center mb-6">
										"{testimonial.text}"
									</p>
									<p className="font-bold text-md text-purple-200">
										{testimonial.name}
									</p>
								</div>
							)
						)}
					</div>
				</div>
			</Parallax>
		</div>
	);
};

export default Testimonials;
