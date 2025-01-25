import React, { SetStateAction } from "react";
import { Link, NavLink } from "react-router-dom";
import AccountCartAction from "../shared/AccountCartAction";

interface NavbarDesktopProps {
	showCartSummary: boolean;
	setShowCartSummary: React.Dispatch<SetStateAction<boolean>>;
	handleShowCartSummary: (pathname: string) => void;
}
const NavbarDesktop: React.FC<NavbarDesktopProps> = ({
	showCartSummary,
	setShowCartSummary,
	handleShowCartSummary,
}) => {
	return (
		<div
			aria-label="navigation for desktop screen"
			className="hidden w-full md:grid md:px-8 grid-cols-2 md:grid-cols-[1fr_1fr] flex-row justify-between items-center h-14 sticky top-0 z-40 bg-white"
		>
			<nav className="hidden md:flex px-2" aria-label="desktop navigation">
				<ul className="flex flex-row space-x-8  text-xs ">
					<li>
						<Link
							to="/"
							aria-label="navigate to home"
							className="flex justify-center items-center flex-row space-x-2 "
						>
							<figure>
								<img
									src="/svg/threadIcon.svg"
									className="h-6 w-6"
									alt="urban thread logo"
								/>
							</figure>
						</Link>
					</li>
					<li className="flex justify-center items-center">
						<NavLink
							to="/women-collection"
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
							to="/men-collection"
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

			<AccountCartAction
				handleShowCartSummary={handleShowCartSummary}
				setShowCartSummary={setShowCartSummary}
				showCartSummary={showCartSummary}
			/>
		</div>
	);
};

export default NavbarDesktop;
