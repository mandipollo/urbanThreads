import React, { SetStateAction, useState } from "react";

// components

import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

// interfaces
interface NavbarProps {
	token: string | null;
	hamburgerMenu: boolean;
	setHamburgerMenu: React.Dispatch<SetStateAction<boolean>>;
}
const Navbar: React.FC<NavbarProps> = ({ hamburgerMenu, setHamburgerMenu }) => {
	// handle hamburger menu

	const handleHamburgerMenu = () => {
		setHamburgerMenu(!hamburgerMenu);
	};
	// cart summary

	const [showCartSummary, setShowCartSummary] = useState<boolean>(false);

	// disable cart summary in cart and checkout page

	const handleShowCartSummary = (pathname: String) => {
		if (pathname === "/cart" || pathname === "/checkout") {
			return;
		} else {
			setShowCartSummary(true);
		}
	};

	return (
		<header className="flex sticky top-0 z-40 bg-white">
			<NavbarMobile
				showCartSummary={showCartSummary}
				setShowCartSummary={setShowCartSummary}
				handleShowCartSummary={handleShowCartSummary}
				hamburgerMenu={hamburgerMenu}
				handleHamburgerMenu={handleHamburgerMenu}
			/>
			<NavbarDesktop
				showCartSummary={showCartSummary}
				setShowCartSummary={setShowCartSummary}
				handleShowCartSummary={handleShowCartSummary}
			/>
		</header>
	);
};

export default Navbar;
