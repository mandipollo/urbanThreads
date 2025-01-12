import React, { SetStateAction } from "react";

interface NavbarMobileProps {
	category: string;
	setCategory: React.Dispatch<SetStateAction<string>>;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
	category,
	setCategory,
}) => {
	return (
		<nav className="w-full h-full flex flex-col z-10 mt-[56px] ">
			<div className="grid grid-cols-2  w-full h-full">
				<button
					aria-label="select women category"
					onClick={() => setCategory("women")}
					className={`${
						category === "women" ? "border-black text-black" : "text-gray-400 "
					} border h-20`}
				>
					Women
				</button>
				<button
					aria-label="select men category"
					onClick={() => setCategory("men")}
					className={`${
						category === "men" ? "border-black text-black" : "text-gray-400 "
					} border h-20`}
				>
					Men
				</button>
			</div>
		</nav>
	);
};

export default NavbarMobile;
