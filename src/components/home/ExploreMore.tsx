const DUMMY_DATA = [
	{
		id: 1,
		title: "Shredded jeans",
		category: "Shop women's",
		image: "/image/women_t-shirts.webp",
	},
	{
		id: 2,
		title: "Recycled Jacket",
		category: "Shop men's",
		image: "/image/man_jackets.webp",
	},
	{
		id: 3,
		title: "Casual T-Shirt",
		category: "Shop now",
		image: "/image/women_jeans.webp",
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
			<ul className="flex md:grid md:grid-cols-[1fr_1fr_1fr] flex-nowrap overflow-x-auto w-full gap-2 px-2 snap-x snap-mandatory ">
				{DUMMY_DATA.map(product => (
					<li
						aria-label={product.title}
						className="flex relative flex-col w-screen md:w-full flex-none snap-start"
						key={product.id}
					>
						<figure
							aria-label={product.title}
							className="h-full w-full inline-block  "
						>
							<img
								src={product.image}
								alt={product.title}
								className="h-[500px] object-cover w-full "
							/>
						</figure>

						<div className="flex flex-col justify-center items-center space-y-4 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
							<p className="text-white text-md ld:text-xl">{product.title}</p>
							<button className="px-4 py-2 text-sm lg:text-md  flex  bg-white rounded-xl">
								{product.category}
							</button>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default ExploreMore;