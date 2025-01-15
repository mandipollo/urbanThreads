import { Outlet } from "react-router-dom";

// components
import AccountSidebar from "./components/AccountSidebar";
const Account = () => {
	return (
		<section className="flex flex-row p-2 w-full min-h-[calc(100vh-1em)]">
			<AccountSidebar />
			<div className="flex flex-1 w-full h-full pl-2">
				<Outlet />
			</div>
		</section>
	);
};

export default Account;
