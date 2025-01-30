import { useEffect, useState } from "react";

// state && routes
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { Slide, ToastContainer } from "react-toastify";
//component
import Navbar from "../components/layout/Navbar";
import Footer from "../components/footer/Footer";
const Root = () => {
	// customer online status using token

	const token = useAppSelector(state => state.tokenReducer.token);

	// Navbar state for mobile screen

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
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="colored"
				transition={Slide}
			/>

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
