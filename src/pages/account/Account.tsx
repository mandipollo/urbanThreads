import { Outlet } from "react-router-dom";

// components
import AccountSidebar from "./components/AccountSidebar";
const Account = () => {
	return (
		<section className="flex flex-row space-x-10 p-2 relative w-full  min-h-[calc(100vh-1em)]">
			<AccountSidebar />
			<div className="flex flex-1 w-full h-full pl-40">
				<Outlet />
			</div>
		</section>
	);
};

export default Account;
