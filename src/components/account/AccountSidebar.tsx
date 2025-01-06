import { NavLink } from "react-router-dom";

const AccountSidebar = () => {
	const activeClass = "underline";
	const inactiveClass = "";
	return (
		<nav className="flex h-full text-xl ">
			<ul className="flex flex-col space-y-4">
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClass : inactiveClass
						}
						to="/account"
					>
						ORDERS
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClass : inactiveClass
						}
						to="/account/member"
					>
						MEMBERSHIP
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeClass : inactiveClass
						}
						to="/account/settings"
					>
						ACCOUNT SETTINGS
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default AccountSidebar;
