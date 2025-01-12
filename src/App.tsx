import { createBrowserRouter, RouterProvider } from "react-router-dom";

//state
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

// pages
import Root from "./pages/Root";
import Home from "./pages/home/Home";
import MenCollection from "./pages/menCollection/MenCollection";
import WomenCollection from "./pages/womenCollection/WomenCollection";
import Product from "./pages/product/Product";
import UserAuth from "./pages/auth/UserAuth";
import Account from "./pages/account/Account";
import AccountSettings from "./pages/accountSettings/AccountSettings";
import Membership from "./pages/membership/Membership";
import Orders from "./pages/orders/Orders";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";

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
			{ path: "/checkout", element: <Checkout /> },

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
