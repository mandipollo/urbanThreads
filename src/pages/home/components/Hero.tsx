import { Link } from "react-router-dom";
import ActionButton from "../../../components/ui/ActionButton";

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
					alt="hero image showcasing general products for men and women"
					className="hidden md:flex w-full h-full object-cover"
					src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548283/hero_desktop_lpvnls.webp"
				></img>
				<img
					alt="hero image showcasing general products for men and women"
					className="flex md:hidden w-full h-full object-cover"
					src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548285/hero_mobile_smshoe.webp"
				></img>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex space-x-2 md:space-x-10  ">
					<Link
						aria-label="Navigate to women's collection"
						to="/women-collection"
					>
						<ActionButton action="Shop Women's" />
					</Link>
					<Link aria-label="Navigate to men's collection" to="/men-collection">
						<ActionButton action="Shop Men's" />
					</Link>
				</div>
			</figure>
		</section>
	);
};

export default Hero;
