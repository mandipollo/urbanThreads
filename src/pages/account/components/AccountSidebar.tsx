import { Link } from "react-router-dom";

const AccountSidebar = () => {
	return (
		<nav aria-label="Sidebar for account" className=" text-xl relative ">
			<ul className="inline-flex flex-col space-y-4 sticky top-20 ">
				<li>
					<Link aria-label="Navigate to order page " to="/account">
						<figure className="block lg:hidden">
							<img
								src="/svg/orderIcon.svg"
								alt="order icon"
								className="h-4 w-4 "
							/>
						</figure>
						<p className=" hidden lg:block"> ORDERS</p>
					</Link>
				</li>
				<li>
					<Link
						aria-label="Navigate to account settings page "
						to="/account/settings"
					>
						<figure className=" block lg:hidden">
							<img
								src="/svg/setting.svg"
								alt="order icon"
								className="h-4 w-4 "
							/>
						</figure>
						<p className=" hidden lg:block"> ACCOUNT SETTINGS</p>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default AccountSidebar;
