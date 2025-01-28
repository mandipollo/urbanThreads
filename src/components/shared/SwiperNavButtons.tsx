import React from "react";
import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
	const swiper = useSwiper();
	return (
		<div className="flex absolute z-10 top-1/2 left-2 right-2 w-full ">
			<button
				className="absolute z-10 top-1/2 left-2 bg-white rounded-full p-1 shadow-md transform -translate-y-1/2 flex"
				onClick={() => swiper.slidePrev()}
			>
				<figure>
					<img src="/svg/arrow-left.svg" className="h-4 w-4" alt="" />
				</figure>
			</button>
			<button
				className="absolute z-10 top-1/2 right-2 bg-white rounded-full p-1 shadow-md transform -translate-y-1/2 flex"
				onClick={() => swiper.slideNext()}
			>
				<figure>
					<img src="/svg/arrow-right.svg" className="h-4 w-4" alt="" />
				</figure>
			</button>
		</div>
	);
};

export default SwiperNavButtons;
