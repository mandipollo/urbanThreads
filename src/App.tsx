import { createBrowserRouter, RouterProvider } from "react-router-dom";

//state
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// pages
import Root from "./pages/Root";
import Home from "./pages/Home";
import MenCollection from "./pages/MenCollection";
import WomenCollection from "./pages/WomenCollection";
import Product from "./pages/Product";
import UserAuth from "./pages/UserAuth";
import Account from "./pages/Account";
import AccountSettings from "./pages/AccountSettings";
import Membership from "./pages/Membership";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
let persistor = persistStore(store);

const Route = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/product/women",
				element: <WomenCollection />,
			},
			{
				path: "/product/men",
				element: <MenCollection />,
			},

			{ path: "/product/:gender/:productId", element: <Product /> },
			{ path: "/userAuth", element: <UserAuth /> },
			{ path: "/cart", element: <Cart /> },

			{
				path: "/account",
				element: <Account />,
				children: [
					{ index: true, element: <Orders /> },
					{
						path: "/account/settings",
						element: <AccountSettings />,
					},
					{
						path: "/account/member",
						element: <Membership />,
					},
				],
			},
		],
	},
]);

function App() {
	return (
		<div className=" flex font-roboto font-light">
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<RouterProvider router={Route}></RouterProvider>
				</PersistGate>
			</Provider>
		</div>
	);
}

export default App;
