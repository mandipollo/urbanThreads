import React, { SetStateAction } from "react";
import { Link } from "react-router-dom";
import AccountCartAction from "../shared/AccountCartAction";

interface NavbarMobileProps {
	hamburgerMenu: boolean;
	handleHamburgerMenu: () => void;
	setShowCartSummary: React.Dispatch<SetStateAction<boolean>>;
	handleShowCartSummary: (pathname: string) => void;
	showCartSummary: boolean;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
	hamburgerMenu,
	handleHamburgerMenu,
	setShowCartSummary,
	handleShowCartSummary,
	showCartSummary,
}) => {
	return (
		<nav
			aria-label="navigation header for mobile or smaller screens"
			className="flex md:hidden flex-row h-full w-full"
		>
			<div className="grid grid-cols-3 w-full flex-row justify-between items-center h-14">
				<div>
					<button role="button" className="pl-4" onClick={handleHamburgerMenu}>
						<figure className="relative">
							{hamburgerMenu ? (
								<img
									className="h-4 w-4 "
									src="/svg/close.svg"
									alt="close hamburge menu in mobile mode"
								/>
							) : (
								<img
									className="h-4 w-4 "
									src="/svg/hamburger-menu.svg"
									alt="open hamburder menu in mobile mode"
								/>
							)}
						</figure>
					</button>
				</div>
				<div className="flex justify-center items-center">
					<Link to="/" aria-label="navigate to homepage">
						<h2 className="font-poiret">UrbanThreads</h2>
					</Link>
				</div>
				<AccountCartAction
					handleShowCartSummary={handleShowCartSummary}
					showCartSummary={showCartSummary}
					setShowCartSummary={setShowCartSummary}
				/>
			</div>
			{hamburgerMenu && (
				<div
					aria-label="navigate to various sections when menu is open"
					className="flex flex-col gap-4 fixed top-14 inset-0 z-40 bg-white overscroll-contain"
				>
					<div className="grid grid-cols-2 h-20 w-full">
						<Link
							aria-label="navigate to women collection"
							onClick={handleHamburgerMenu}
							to="/women-collection"
							className="border flex justify-center items-center"
						>
							<p>Women</p>
						</Link>

						<Link
							aria-label="navigate to men collection"
							onClick={handleHamburgerMenu}
							to="/men-collection"
							className="border flex justify-center items-center"
						>
							<p>Men</p>
						</Link>
					</div>
					<div className="flex flex-col w-full gap-10 ">
						<ul className="flex flex-col gap-4 px-4 h-full w-full font-normal">
							<li className="w-full">
								<button
									aria-label="browse featured products"
									className="flex justify-between items-center w-full"
								>
									<p>Featured</p>
									<figure>
										<img
											src="/svg/arrow-right.svg"
											alt="arrow"
											className="h-4 w-4"
										/>
									</figure>
								</button>
							</li>
							<li className="w-full">
								<button
									aria-label="browse through categories of products"
									className="flex justify-between items-center w-full"
								>
									<p>Categories</p>
									<figure>
										<img
											src="/svg/arrow-right.svg"
											alt="arrow"
											className="h-4 w-4"
										/>
									</figure>
								</button>
							</li>
							<li className="w-full">
								<button
									aria-label="browse through colors of products"
									className="flex justify-between items-center w-full"
								>
									<p>Shop by Color</p>
									<figure>
										<img
											src="/svg/arrow-right.svg"
											alt="arrow"
											className="h-4 w-4"
										/>
									</figure>
								</button>
							</li>
							<li className="w-full">
								<button
									aria-label="browse through capsules of products"
									className="flex justify-between items-center w-full"
								>
									<p>Shop by Capsules</p>
									<figure>
										<img
											src="/svg/arrow-right.svg"
											alt="arrow"
											className="h-4 w-4"
										/>
									</figure>
								</button>
							</li>
						</ul>
						<ul className="flex flex-col gap-4 px-4 h-full w-full font-normal border-t py-10">
							<li className="w-full">
								<button
									aria-label="navigate to gifts section"
									className="flex justify-between items-center w-full"
								>
									<p>Gifts</p>
								</button>
							</li>
							<li aria-label="Login or signup" className="w-full">
								<button className="flex justify-between items-center w-full">
									<p>Login/Register</p>
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}
		</nav>
	);
};

export default NavbarMobile;
