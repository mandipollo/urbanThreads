import React, { SetStateAction } from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
	setSubCategory: React.Dispatch<SetStateAction<string>>;
	subCategory: string;
	category: "Women" | "Men";
}
const Category: React.FC<CategoryProps> = ({
	setSubCategory,
	subCategory,
	category,
}) => {
	return (
		<section
			aria-label={`Collection of ${category} products`}
			className="flex flex-col w-screen md:grid md:grid-cols-2 md:py-20 text-xs"
		>
			<section className="flex flex-col gap-2 p-2  md:p-10 md:justify-center  ">
				<div className="flex space-x-4  items-center">
					<Link aria-label="navigate to home" className="text-gray-400" to="/">
						Home
					</Link>
					<p className="text-gray-400">/</p>

					<button
						aria-label="render all products"
						onClick={() => setSubCategory("")}
						className={`p-2 border ${subCategory === "" && "border-black"} `}
					>
						{category === "Men" ? " Men's Shop All" : "Women's Shop All"}
					</button>
				</div>
				<div className="flex flex-col ">
					<p className="text-sm md:text-xl">
						{category === "Men" ? " MENS SHOP ALL" : "WOMEN SHOP ALL"}
					</p>
					<p>
						Build your wardrobe with styles made from innovative materials.
						<br />
						Discover our tracksuits, t-shirts, activewear, outerwear and
						sneakers for {category === "Men" ? "men" : "women"}.
					</p>
				</div>
			</section>
			<section
				aria-labelledby="filter-heading"
				className=" text-sm flex flex-row overflow-x-scroll scrollbar-hide py-10 max-w-[700px] md:grid  md:grid-flow-col md:grid-rows-2 gap-4 "
			>
				<h4 id="filter-heading" className="sr-only">
					Filter products by subcategory
				</h4>
				<button
					aria-label="render only coats"
					className={`flex flex-col group h-full border  ${
						subCategory === "coat" ? " border-black " : "border-transparent"
					}  `}
					onClick={() => setSubCategory("coat")}
				>
					<figure className="h-44 w-44 flex flex-col">
						<img
							className="w-full h-full object-cover"
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550430/women-coat_h4rsib.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548285/men-coat_puw2nb.webp"
							}
							alt="category coat"
						/>
						<figcaption className=" group-hover:underline">COATS</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to hoodie"
					className={`flex flex-col group h-full border  ${
						subCategory === "hoodie" ? " border-black" : "border-transparent"
					}  `}
					onClick={() => setSubCategory("hoodie")}
				>
					<figure className="h-44 w-44 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550430/hoodie-women_w1ojjr.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548286/men-hoodie_j2nb9b.webp"
							}
							className="object-cover h-full w-full"
							alt="category hoodie"
						/>
						<figcaption className=" group-hover:underline">HOODIE</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to jacket"
					className={`flex flex-col group border h-full  ${
						subCategory === "jacket" ? " border-black" : "border-transparent"
					}  `}
					onClick={() => setSubCategory("jacket")}
				>
					<figure className="h-44 w-44 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550430/women-jacket_pi4oo1.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548286/men-jacket_fsaoow.webp"
							}
							className="object-cover h-full w-full"
							alt="category jacket"
						/>
						<figcaption className="group-hover:underline">JACKET</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to short"
					className={`flex flex-col group border h-full  ${
						subCategory === "short" ? " border-black" : "border-transparent"
					}  `}
					onClick={() => setSubCategory("short")}
				>
					<figure className="h-44 w-44 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550431/women-shorts_ij9opi.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548288/men-shorts_ojg57b.webp"
							}
							className="object-cover h-full w-full"
							alt="category shorts"
						/>
						<figcaption className="group-hover:underline">SHORTS</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to sneaker"
					className={`flex flex-col group border h-full  ${
						subCategory === "sneaker" ? " border-black" : "border-transparent"
					}  `}
					onClick={() => setSubCategory("sneaker")}
				>
					<figure className="h-44 w-44 flex flex-col">
						<img
							src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548289/men-sneaker_rpmaem.webp"
							className="object-cover h-full w-full"
							alt="category sneaker"
						/>
						<figcaption className="group-hover:underline">SNEAKER</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to sweatshirt"
					className={`flex flex-col group border h-full ${
						subCategory === "sweatshirt"
							? " border-black"
							: "border-transparent"
					}  `}
					onClick={() => setSubCategory("sweatshirt")}
				>
					<figure className="h-44 w-44 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550431/women-sweatshirt_lvzuob.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548288/men-sweatshirt_gomokk.webp"
							}
							className="object-cover h-full w-full"
							alt="category sweatshirt"
						/>
						<figcaption className="group-hover:underline">
							SWEATSHIRT
						</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to trouser"
					className={`flex flex-col group border h-40 ${
						subCategory === "trouser" ? " border-black" : "border-transparent"
					}  `}
					onClick={() => setSubCategory("trouser")}
				>
					<figure className="h-44 w-44 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550431/women-trousers_gxejm8.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548288/men-trousers_qpbed5.webp"
							}
							className="h-full w-full object-cover"
							alt="category trouser"
						/>
						<figcaption className="group-hover:underline">TROUSER</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to tshirt"
					className={`flex flex-col group border h-full ${
						subCategory === "tshirt" ? " border-black" : "border-transparent"
					}  `}
					onClick={() => setSubCategory("tshirt")}
				>
					<figure className="h-44 w-44 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550431/women-tshirt_cr75np.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548289/men-tshirt_qxhd5j.webp"
							}
							className="h-full w-full object-cover"
							alt="category t-shirt"
						/>
						<figcaption className="group-hover:underline">T-SHIRT</figcaption>
					</figure>
				</button>
			</section>
		</section>
	);
};

export default Category;
