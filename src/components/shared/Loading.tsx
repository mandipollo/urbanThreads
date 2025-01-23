import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";
const Loading = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<Lottie
				autoplay
				loop
				className="h-40 w-40"
				animationData={loadingAnimation}
			/>
		</div>
	);
};

export default Loading;
