import React from "react";
// components
import NewIn from "./components/NewIn";
import ExploreMore from "./components/ExploreMore";
import Hero from "./components/Hero";
import Meta from "../../components/shared/Meta";
import BestSeller from "./components/BestSeller";

const Home: React.FC = () => {
	return (
		<main className="flex flex-col justify-center items-center ">
			<Meta
				title="UrbanThreads"
				description="Build your wardrobe with styles made from innovative materials."
				keywords="Clothes , men's and women's"
			/>
			<Hero />
			<ExploreMore />
			<NewIn />
			<BestSeller />
		</main>
	);
};

export default Home;
