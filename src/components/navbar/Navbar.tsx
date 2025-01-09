import React, { SetStateAction } from "react";
import CartSvg from "../icons/CartSvg";
import { Link, NavLink } from "react-router-dom";
import CartSummary from "../cart/CartSummary";

interface NavbarProps {
	token: string | null;
	hamburgerMenu: boolean;
	setHamburgerMenu: React.Dispatch<SetStateAction<boolean>>;
	cartSidebar: boolean;
	setCartSidebar: React.Dispatch<SetStateAction<boolean>>;
}
const Navbar: React.FC<NavbarProps> = ({
	hamburgerMenu,
	setHamburgerMenu,
	setCartSidebar,
	cartSidebar,
	token,
}) => {
	return (
		<header className="grid md:px-8 grid-cols-2 md:grid-cols-[1fr_1fr_1fr] flex-row justify-between items-center h-14 sticky top-0 z-40 bg-white">
			<nav className="flex h-full md:hidden">
				<button
					role="button"
					aria-label="hamburger menu"
					className="pl-4"
					onClick={() => setHamburgerMenu(!hamburgerMenu)}
				>
					<figure className="h-4 w-4 relative">
						{hamburgerMenu ? (
							<img
								src="/svg/close.svg"
								alt="close hamburge menu in mobile mode"
							/>
						) : (
							<img
								src="/svg/hamburger-menu.svg"
								alt="open hamburder menu in mobile mode"
							/>
						)}
					</figure>
				</button>
			</nav>
			<nav className="hidden  md:flex px-2" aria-label="desktop navigation">
				<ul className="flex flex-row space-x-8  text-xs ">
					<li>
						<Link
							to="/"
							aria-label="navigate to home"
							className="flex justify-center items-center flex-row space-x-2 "
						>
							<figure className="h-8 w-8">
								<img src="/svg/threadIcon.svg" alt="urban thread logo" />
							</figure>
						</Link>
					</li>
					<li className="flex justify-center items-center">
						<NavLink
							to="/product/women"
							aria-label="browse women products"
							className={({ isActive }) =>
								isActive ? "underline underline-offset-1" : ""
							}
						>
							Women
						</NavLink>
					</li>
					<li className="flex justify-center items-center">
						<NavLink
							to="/product/men"
							aria-label="browse men products"
							className={({ isActive }) =>
								isActive ? "underline underline-offset-1" : ""
							}
						>
							Men
						</NavLink>
					</li>
				</ul>
			</nav>
			<nav className="px-2 flex justify-center items-center"></nav>

			<nav
				onMouseLeave={() => setCartSidebar(false)}
				className="px-4 space-x-8 h-full items-center hidden md:flex  justify-end"
			>
				{token ? (
					<Link to="/account" aria-label="navigate to user account page">
						<button aria-label="log in" className="h-4 w-4">
							<img src="/svg/account.svg" alt="account " />
						</button>
					</Link>
				) : (
					<Link to="/userAuth" aria-label="log in">
						<button aria-label="log in" className="h-4 w-4">
							<img src="/svg/account.svg" alt="log in" />
						</button>
					</Link>
				)}

				<div onMouseEnter={() => setCartSidebar(true)}>
					<Link to="/cart">
						<button aria-label="navigate to cart" className="h-4 w-4 ">
							<CartSvg color="black" />
						</button>
					</Link>
					{cartSidebar && <CartSummary />}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
