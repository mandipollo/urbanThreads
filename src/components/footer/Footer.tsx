import HoverRevealButton from "../shared/HoverRevealButton";

const Footer = ({}) => {
	return (
		<footer className="flex w-full text-gray-400">
			<div className="grid md:grid-cols-2 md:m-2 p-10 rounded-md bg-black w-full">
				<section className="flex flex-col gap-4">
					<h3>UrbanThreads</h3>
					<p className="text-gray-500 text-xl">This is a demo site.</p>
					<a
						target="_blank"
						className="text-gray-600"
						href="http://mandipollo.uk"
					>
						mandipollo.uk
					</a>
				</section>

				<section className="flex flex-row w-full h-full gap-10">
					<span className="h-full w-[0.5px] bg-gradient-to-b from-black via-slate-400 to-black"></span>
					<div className="flex flex-row justify-between w-full">
						<ul className="flex flex-col space-y-2 p-2">
							<li>
								<HoverRevealButton text="SHOP" />
							</li>
							<li>
								<HoverRevealButton text="WOMEN" />
							</li>
							<li>
								<HoverRevealButton text="MEN" />
							</li>
						</ul>
						<ul className="flex flex-col space-y-2 justify-center p-2  ">
							<li className="h-full w-full">
								<HoverRevealButton text="ABOUT US" />
							</li>
							<li className="h-full w-full">
								<HoverRevealButton text="CONTACT" />
							</li>
							<li className="h-full w-full">
								<HoverRevealButton text="DELIVERY" />
							</li>
						</ul>
					</div>
					<span className="h-full w-[0.5px] bg-gradient-to-b from-black via-slate-400 to-black"></span>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
