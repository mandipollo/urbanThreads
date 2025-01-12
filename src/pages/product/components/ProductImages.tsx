import React from "react";

interface ProductImagesProps {
	images: string[];
	name: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ images, name }) => {
	return (
		<section aria-label="product images" className="flex flex-col w-full">
			<figure className="h-full w-full">
				<img
					loading="lazy"
					className="object-cover w-full"
					src={images[0]}
					alt={name}
				/>
			</figure>
			<figure className="h-full w-full">
				<img
					aria-hidden="true"
					loading="lazy"
					className="object-cover w-full"
					src={images[1]}
					alt={name}
				/>
			</figure>
		</section>
	);
};

export default ProductImages;
