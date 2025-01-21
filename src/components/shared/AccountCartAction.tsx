import React, { SetStateAction } from "react";
import { Link, useLocation } from "react-router-dom";
import CartSvg from "../icons/CartSvg";
import { useAppSelector } from "../../store/store";
import CartSummary from "../layout/CartSummary";

interface AccountCartActionProps {
	handleShowCartSummary: (pathname: string) => void;
	showCartSummary: boolean;
	setShowCartSummary: React.Dispatch<SetStateAction<boolean>>;
}
const AccountCartAction: React.FC<AccountCartActionProps> = ({
	handleShowCartSummary,
	showCartSummary,
	setShowCartSummary,
}) => {
	const cartItemsLength = useAppSelector(
		state => state.cartReducer.items.length
	);
	const token = useAppSelector(state => state.tokenReducer.token);
	const { pathname } = useLocation();
	return (
		<div
			onMouseLeave={() => setShowCartSummary(false)}
			className="h-full items-center flex space-x-2 justify-end gap-2 pr-4"
		>
			{token ? (
				<Link to="/account" aria-label="navigate to user account page">
					<figure>
						<img src="/svg/account.svg" alt="account " className="h-4 w-4" />
					</figure>
				</Link>
			) : (
				<Link to="/userAuth" aria-label="log in">
					<figure>
						<img src="/svg/account.svg" alt="log in" className="h-4 w-4" />
					</figure>
				</Link>
			)}

			<div onMouseEnter={() => handleShowCartSummary(pathname)}>
				<Link to="/cart" className="relative" aria-label="navigate to cart">
					<CartSvg color="black" />
					{cartItemsLength > 0 && (
						<span className="absolute h-4 w-4 flex justify-center items-center -top-2 -right-3 bg-red-500 rounded-full text-xs text-white">
							{cartItemsLength}
						</span>
					)}
				</Link>
				{showCartSummary && <CartSummary />}
			</div>
		</div>
	);
};

export default AccountCartAction;
