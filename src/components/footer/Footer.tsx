import HoverRevealButton from "../ui/HoverRevealButton";

const Footer = () => {
	return (
		<footer
			aria-labelledby="footer-label"
			className="flex w-full text-white min-h-44"
		>
			<h4 id="footer-label" className="sr-only">
				Footer section consists of various navigation links
			</h4>
			<div className="grid md:grid-cols-2 md:m-2 p-10 rounded-md bg-black w-full">
				<section className="flex flex-col gap-4">
					<h3>UrbanThreads</h3>
					<p className="text-xl">This is a demo site.</p>
					<a target="_blank" href="http://mandipollo.uk">
						mandipollo.uk
					</a>
				</section>

				<section className="flex flex-row w-full h-full gap-10">
					<span className="h-full w-[0.5px] bg-gradient-to-b from-black via-slate-400 to-black"></span>
					<div className="flex flex-row justify-between w-full">
						<ul className="flex flex-col space-y-2 p-2">
							<li aria-label="Link to shop">
								<HoverRevealButton text="SHOP" />
							</li>
							<li aria-label="Link to women collection">
								<HoverRevealButton text="WOMEN" />
							</li>
							<li aria-label="Link to men's collection">
								<HoverRevealButton text="MEN" />
							</li>
						</ul>
						<ul className="flex flex-col space-y-2 justify-center p-2  ">
							<li aria-label="Link to about us page" className="h-full w-full">
								<HoverRevealButton text="ABOUT US" />
							</li>
							<li aria-label="Link to contacts" className="h-full w-full">
								<HoverRevealButton text="CONTACT" />
							</li>
							<li
								aria-label="Link to delivery information"
								className="h-full w-full"
							>
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
