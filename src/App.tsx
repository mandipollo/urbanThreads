import {
	BrowserRouter,
	createBrowserRouter,
	Route,
	RouterProvider,
	Routes,
} from "react-router-dom";
import { Suspense, lazy } from "react";
// state
import { Provider } from "react-redux";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
let persistor = persistStore(store);

//
import "react-loading-skeleton/dist/skeleton.css";

import { HelmetProvider } from "react-helmet-async";
import Loading from "./components/shared/Loading";
import ScrollToTop from "./components/wrapper/ScrollTop";

// Lazy loaded pages
const Root = lazy(() => import("./pages/Root"));
const Home = lazy(() => import("./pages/home/Home"));
const MenCollection = lazy(() => import("./pages/menCollection/MenCollection"));
const WomenCollection = lazy(
	() => import("./pages/womenCollection/WomenCollection")
);
const Product = lazy(() => import("./pages/product/Product"));
const UserAuth = lazy(() => import("./pages/auth/UserAuth"));
const ForgotPassword = lazy(
	() => import("./pages/password-forgot/ForgotPassword")
);
const PasswordReset = lazy(
	() => import("./pages/password-reset/Password_reset")
);

const Account = lazy(() => import("./pages/account/Account"));
const AccountSettings = lazy(
	() => import("./pages/accountSettings/AccountSettings")
);
const Orders = lazy(() => import("./pages/orders/Orders"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const ErrorPage = lazy(() => import("./pages/error/ErrorPage"));

function App() {
	return (
		<div className="flex font-roboto font-light">
			<HelmetProvider>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<BrowserRouter>
							<ScrollToTop>
								<Suspense fallback={<Loading />}>
									<Routes>
										<Route path="/" element={<Root />}>
											<Route index element={<Home />} />
											<Route
												path="women-collection"
												element={<WomenCollection />}
											/>
											<Route
												path="men-collection"
												element={<MenCollection />}
											/>
											<Route
												path="product/:gender/:productId"
												element={<Product />}
											/>
											<Route path="user-auth" element={<UserAuth />} />
											<Route
												path="forgot-password"
												element={<ForgotPassword />}
											/>
											<Route
												path="password-reset/:token"
												element={<PasswordReset />}
											/>
											<Route path="cart" element={<Cart />} />
											<Route path="checkout" element={<Checkout />} />
											<Route path="account" element={<Account />}>
												<Route index element={<Orders />} />
												<Route path="settings" element={<AccountSettings />} />
											</Route>
										</Route>
										<Route path="*" element={<ErrorPage />} />
									</Routes>
								</Suspense>
							</ScrollToTop>
						</BrowserRouter>
					</PersistGate>
				</Provider>
			</HelmetProvider>
		</div>
	);
}

export default App;
