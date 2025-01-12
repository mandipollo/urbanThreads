import { Link } from "react-router-dom";
import ActionButton from "../shared/ActionButton";

const Hero = () => {
	return (
		<section
			aria-labelledby="hero-heading"
			className="flex flex-col  w-full relative justify-center items-center text-xss "
		>
			<h1 id="hero-heading" className="sr-only">
				Explore our seasonal fashion collection
			</h1>
			<figure className="relative w-full aspect-video ">
				<img
					loading="lazy"
					alt="hero image showcasing general products for men and women"
					className="flex w-full h-full object-cover"
					src="/image/hero_desktop.webp"
				></img>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2 md:space-x-10  ">
					<Link to="/product/women">
						<ActionButton action="Shop Women's" />
					</Link>
					<Link to="/product/men">
						<ActionButton action="Shop Men's" />
					</Link>
				</div>
			</figure>
		</section>
	);
};

export default Hero;
