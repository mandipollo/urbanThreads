import { useEffect, useState } from "react";

// state && routes
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { ToastContainer } from "react-toastify";
//component
import NavbarMobile from "../components/layout/NavbarMobile";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";
const Root = () => {
	// customer online status using token

	const token = useAppSelector(state => state.tokenReducer.token);

	// Navbar state for mobile screen
	const [category, setCategory] = useState<string>("Women");
	const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);

	// Disable scrolling when hamburger menu is active
	useEffect(() => {
		if (hamburgerMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		// Cleanup on unmount
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [hamburgerMenu]);
	return (
		<main className="flex w-full relative flex-col min-h-screen ">
			<ToastContainer />

			<Navbar
				token={token}
				setHamburgerMenu={setHamburgerMenu}
				hamburgerMenu={hamburgerMenu}
			/>
			<section className="flex flex-col flex-grow ">
				<Outlet />
			</section>
			<Footer />
		</main>
	);
};

export default Root;
