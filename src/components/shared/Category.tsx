import React, { SetStateAction } from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
	setFilter: React.Dispatch<SetStateAction<string>>;
	filter: string;
	category: "Women" | "Men";
}
const Category: React.FC<CategoryProps> = ({ setFilter, filter, category }) => {
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
						onClick={() => setFilter("")}
						className={`p-2 border ${filter === "" && "border-black"} `}
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
				className=" flex flex-row overflow-x-scroll scrollbar-hide py-10   max-w-[700px] md:grid  md:grid-flow-col md:grid-rows-2 gap-4 "
			>
				<h4 id="filter-heading" className="sr-only">
					Filter products by subcategory
				</h4>
				<button
					aria-label="render only coats"
					className={`flex flex-col group border h-ful ${
						filter === "coat" && " border-black "
					}  `}
					onClick={() => setFilter("coat")}
				>
					<figure className="h-40 w-40 flex flex-col">
						<img
							className="object-cover h-40 w-40"
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550430/women-coat_h4rsib.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548285/men-coat_puw2nb.webp"
							}
							alt="category coat"
						/>
						<figcaption className="group-hover:underline">Coats</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to hoodie"
					className={`flex flex-col group border h-full  ${
						filter === "hoodie" && " border-black"
					}  `}
					onClick={() => setFilter("hoodie")}
				>
					<figure className="h-40 w-40 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550430/hoodie-women_w1ojjr.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548286/men-hoodie_j2nb9b.webp"
							}
							className="h-40 w-40 object-cover"
							alt="category hoodie"
						/>
						<figcaption className="group-hover:underline">Hoodie</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to jacket"
					className={`flex flex-col group border h-full  ${
						filter === "jacket" && " border-black"
					}  `}
					onClick={() => setFilter("jacket")}
				>
					<figure className="h-40 w-40 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550430/women-jacket_pi4oo1.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548286/men-jacket_fsaoow.webp"
							}
							className="object-cover h-40 w-40"
							alt="category jacket"
						/>
						<figcaption className="group-hover:underline">Jacket</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to short"
					className={`flex flex-col group border h-full  ${
						filter === "short" && " border-black"
					}  `}
					onClick={() => setFilter("short")}
				>
					<figure className="h-40 w-40 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550431/women-shorts_ij9opi.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548288/men-shorts_ojg57b.webp"
							}
							className="object-cover h-40 w-40"
							alt="category shorts"
						/>
						<figcaption className="group-hover:underline">Shorts</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to sneaker"
					className={`flex flex-col group border h-full  ${
						filter === "sneaker" && " border-black"
					}  `}
					onClick={() => setFilter("sneaker")}
				>
					<figure className="h-40 w-40 flex flex-col">
						<img
							src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548289/men-sneaker_rpmaem.webp"
							className="h-40 w-40 object-cover"
							alt="category sneaker"
						/>
						<figcaption className="group-hover:underline">Sneaker</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to sweatshirt"
					className={`flex flex-col group border h-full ${
						filter === "sweatshirt" && " border-black"
					}  `}
					onClick={() => setFilter("sweatshirt")}
				>
					<figure className="h-40 w-40 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550431/women-sweatshirt_lvzuob.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548288/men-sweatshirt_gomokk.webp"
							}
							className="h-40 w-40 object-cover"
							alt="category sweatshirt"
						/>
						<figcaption className="group-hover:underline">
							Sweatshirt
						</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to trouser"
					className={`flex flex-col group border h-40 ${
						filter === "trouser" && " border-black"
					}  `}
					onClick={() => setFilter("trouser")}
				>
					<figure className="h-40 w-40 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550431/women-trousers_gxejm8.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548288/men-trousers_qpbed5.webp"
							}
							className="h-40 w-40 object-cover"
							alt="category trouser"
						/>
						<figcaption className="group-hover:underline">Trouser</figcaption>
					</figure>
				</button>
				<button
					aria-label="set filter to tshirt"
					className={`flex flex-col group border h-full ${
						filter === "tshirt" && " border-black"
					}  `}
					onClick={() => setFilter("tshirt")}
				>
					<figure className="h-40 w-40 flex flex-col">
						<img
							src={
								category === "Women"
									? "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737550431/women-tshirt_cr75np.webp"
									: "https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548289/men-tshirt_qxhd5j.webp"
							}
							className="h-40 w-40 object-cover"
							alt="category t-shirt"
						/>
						<figcaption className="group-hover:underline">T-Shirt</figcaption>
					</figure>
				</button>
			</section>
		</section>
	);
};

export default Category;
