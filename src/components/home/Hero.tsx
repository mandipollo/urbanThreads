import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<section
			aria-labelledby="hero-heading"
			className="flex flex-col  w-full relative justify-center items-center "
		>
			<h1 id="hero-heading" className="sr-only">
				Explore our seasonal fashion collection
			</h1>
			<figure className=" flex w-full h-full ">
				<img
					loading="lazy"
					alt="hero image showcasing general products for men and women"
					className="flex w-full h-full object-cover"
					src="/image/hero_desktop.webp"
				></img>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2 md:space-x-10  ">
					<Link to="/product/women">
						<button
							aria-label="Shop products for women"
							className="bg-white p-2 rounded-xl text-black"
						>
							For her
						</button>
					</Link>
					<Link to="/product/men">
						<button
							aria-label="Shop products for men"
							className="bg-white p-2 rounded-xl text-black"
						>
							For him
						</button>
					</Link>
				</div>
			</figure>
		</section>
	);
};

export default Hero;
