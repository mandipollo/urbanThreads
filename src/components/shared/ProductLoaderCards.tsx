const ProductLoaderCards = () => {
	return (
		<ul
			aria-label="list of new products"
			className="grid grid-flow-col gap-2 auto-cols-[100%] md:auto-cols-[25%]  overflow-x-auto snap-x snap-mandatory scroll-smooth"
		>
			{Array.from({ length: 4 }).map((_, index) => (
				<li
					className="relative flex flex-row h-full w-full md:w-full flex-none snap-start"
					key={index}
				>
					<figure className="aspect-[3/4] bg-gray-200 animate-pulse"></figure>
					<div className="absolute inset-0 flex flex-col justify-center items-center space-y-4">
						<div className="bg-gray-300 animate-pulse h-6 w-24 rounded"></div>
						<div className="bg-gray-300 animate-pulse h-8 w-32 rounded"></div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default ProductLoaderCards;
