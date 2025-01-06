import React, { SetStateAction } from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
	setFilter: React.Dispatch<SetStateAction<string>>;
	filter: string;
	category: string;
}
const Category: React.FC<CategoryProps> = ({ setFilter, filter, category }) => {
	return (
		<section className="flex flex-col w-screen md:grid md:grid-cols-2 md:py-20 text-xs">
			<section className="flex flex-col gap-2 p-4  md:p-10 md:justify-center  ">
				<div className="flex space-x-4  items-center">
					<Link aria-label="navigate to home" className="text-gray-400" to="/">
						Home
					</Link>
					<p className="text-gray-400">/</p>

					<button
						aria-label="set filter to empty"
						onClick={() => setFilter("")}
						className={`p-2 border ${filter === "" && "border-black"} `}
					>
						{category === "men" ? " Men's Shop All" : "Women's Shop All"}
					</button>
				</div>
				<div className="flex flex-col ">
					<p className="text-sm md:text-xl">
						{category === "men" ? " MENS SHOP ALL" : "WOMEN SHOP ALL"}
					</p>
					<p>
						Build your wardrobe with styles made from innovative materials.
						<br />
						Discover our tracksuits, t-shirts, activewear, outerwear and
						sneakers for {category === "men" ? "men" : "women"}.
					</p>
				</div>
			</section>
			<section
				aria-labelledby="filter-heading"
				className=" flex flex-row overflow-x-scroll scrollbar-hide py-10   max-w-[700px] md:grid  md:grid-flow-col md:grid-rows-2 gap-4 "
			>
				<h4 id="filter-heading" className="sr-only">
					List of product filter
				</h4>
				<button
					aria-label="set filter to coat"
					className={`flex flex-col group border h-ful ${
						filter === "coat" && " border-black "
					}  `}
					onClick={() => setFilter("coat")}
				>
					<figure className="h-40 w-40 flex flex-col">
						<img
							className="object-cover h-40 w-40"
							src="/image/men-coat.webp"
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
							src="/image/men-hoodie.webp"
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
							src="/image/men-jumper.webp"
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
							src="/image/men-shorts.webp"
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
							src="/image/men-sneaker.webp"
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
							src="/image/men-sweatshirt.webp"
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
							src="/image/men-trousers.webp"
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
							src="/image/men-tshirt.webp"
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
