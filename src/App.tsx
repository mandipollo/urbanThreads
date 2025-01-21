import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
// state
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
let persistor = persistStore(store);

//

import { HelmetProvider } from "react-helmet-async";
// Lazy loaded pages
const Root = lazy(() => import("./pages/Root"));
const Home = lazy(() => import("./pages/home/Home"));
const MenCollection = lazy(() => import("./pages/menCollection/MenCollection"));
const WomenCollection = lazy(
	() => import("./pages/womenCollection/WomenCollection")
);
const Product = lazy(() => import("./pages/product/Product"));
const UserAuth = lazy(() => import("./pages/auth/UserAuth"));
const Account = lazy(() => import("./pages/account/Account"));
const AccountSettings = lazy(
	() => import("./pages/accountSettings/AccountSettings")
);
const Orders = lazy(() => import("./pages/orders/Orders"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const ErrorPage = lazy(() => import("./pages/error/ErrorPage"));

// Define routes with lazy loading
const Route = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<Root />
			</Suspense>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Home />
					</Suspense>
				),
			},
			{
				path: "/women-collection",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<WomenCollection />
					</Suspense>
				),
			},
			{
				path: "/men-collection",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<MenCollection />
					</Suspense>
				),
			},
			{
				path: "/product/:gender/:productId",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Product />
					</Suspense>
				),
			},
			{
				path: "/userAuth",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<UserAuth />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Cart />
					</Suspense>
				),
			},
			{
				path: "/checkout",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Checkout />
					</Suspense>
				),
			},
			{
				path: "/account",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Account />
					</Suspense>
				),
				children: [
					{
						index: true,
						element: (
							<Suspense fallback={<div>Loading...</div>}>
								<Orders />
							</Suspense>
						),
					},
					{
						path: "/account/settings",
						element: (
							<Suspense fallback={<div>Loading...</div>}>
								<AccountSettings />
							</Suspense>
						),
					},
				],
			},
		],
	},
	{
		path: "*",
		element: (
			<Suspense fallback={<div>Loading...</div>}>
				<ErrorPage />
			</Suspense>
		),
	},
]);

function App() {
	return (
		<div className=" flex font-roboto font-light">
			<HelmetProvider>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<RouterProvider router={Route}></RouterProvider>
					</PersistGate>
				</Provider>
			</HelmetProvider>
		</div>
	);
}

export default App;
