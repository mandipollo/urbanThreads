import Skeleton from "react-loading-skeleton";
import ActionButton from "../../../components/ui/ActionButton";

const DUMMY_DATA = [
	{
		id: 1,
		title: "Shredded jeans",
		category: "Shop women's",
		image:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548290/women_t-shirts_qgrijh.webp",
	},
	{
		id: 2,
		title: "Recycled Jacket",
		category: "Shop men's",
		image:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548285/man_jackets_guzfrb.webp",
	},
	{
		id: 3,
		title: "Casual T-Shirt",
		category: "Shop now",
		image:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1737548290/women_jeans_etizg6.webp",
	},
];
const ExploreMore = () => {
	return (
		<section
			aria-labelledby="explore-heading"
			className="flex w-full flex-col h-full pt-2"
		>
			<h2
				className="sr-only"
				id="explore-heading"
				aria-label="explore products"
			></h2>

			{DUMMY_DATA ? (
				<ul className="flex md:grid md:grid-cols-[1fr_1fr_1fr] flex-nowrap overflow-x-auto w-full gap-2 px-2 snap-x snap-mandatory ">
					{DUMMY_DATA.map(product => (
						<li
							aria-label={product.title}
							className="flex relative flex-col w-screen md:w-full flex-none snap-start"
							key={product.id}
						>
							<figure
								aria-label={product.title}
								className="aspect-[3/4] relative"
							>
								<img
									src={product.image}
									alt={product.title}
									className="object-cover w-full h-full"
									width={300} // Reserve space
									height={400} // Reserve space
									loading="lazy"
								/>
							</figure>
							<div className="h-[80px] flex flex-col justify-center items-center space-y-4 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<p className="text-white text-md ld:text-xl">{product.title}</p>
								<ActionButton action={product.category} />
							</div>
						</li>
					))}
				</ul>
			) : (
				<ul className="flex md:grid md:grid-cols-[1fr_1fr_1fr] flex-nowrap overflow-x-auto w-full gap-2 px-2 snap-x snap-mandatory ">
					{Array.from({ length: 3 }).map((_, index) => (
						<li
							role="article"
							className="flex relative flex-col w-screen md:w-full flex-none snap-start"
							key={index}
						>
							<figure className=" aspect-[3/4] ">
								<Skeleton className="h-full" />
							</figure>

							<div className="flex flex-col justify-center items-center space-y-4 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "></div>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default ExploreMore;
