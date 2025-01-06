import React, { SetStateAction } from "react";

interface FooterProps {
	company: boolean;
	setCompany: React.Dispatch<SetStateAction<boolean>>;
	contact: boolean;
	setContact: React.Dispatch<SetStateAction<boolean>>;
}

const Footer: React.FC<FooterProps> = ({
	company,
	setCompany,
	contact,
	setContact,
}) => {
	return (
		<footer className="flex flex-col w-full p-2 md:p-10 gap-10 ">
			<section className="flex flex-col gap-4 md:flex-row w-full">
				<div className="flex flex-col md:w-1/2 space-y-4">
					<div className="flex space-x-2 items-end">
						<p className="text-xl md:text-2xl font-poiret ">Urban Threads</p>
						<figure className="h-6 w-6">
							<img src="/svg/threadIcon.svg" alt="urban thread icon" />
						</figure>
					</div>
					<p className="text-xs md:text-sm font-light">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book.
					</p>
				</div>
				<div className="md:w-1/2 flex flex-col md:flex-row  md:gap-10 ">
					<button
						aria-label="open navigation regarding company"
						onClick={() => setCompany(!company)}
						className="flex md:hidden justify-between w-full"
					>
						<p className="text-sm ">Company</p>
						<figure className="h-4 w-4">
							<img
								className={`${
									company ? "-rotate-180" : "rotate-0"
								} transition-all duration-300 ease-in-out`}
								src="/svg/arrow-down.svg"
								alt="company"
							/>
						</figure>
					</button>
					<div
						aria-label="expandable company info button"
						className={`${
							company ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
						} transition-all duration-300 ease-in-out grid md:hidden w-full `}
					>
						<ul className="overflow-hidden grid text-xs">
							<li aria-label="About us" className=" cursor-pointer">
								About us
							</li>
							<li aria-label="Delivery info" className=" cursor-pointer">
								Delivery
							</li>
							<li aria-label="Privacy policy" className=" cursor-pointer">
								Privacy policy
							</li>
						</ul>
					</div>

					<button
						aria-label="expandable contact info button"
						onClick={() => setContact(!contact)}
						className="flex md:hidden justify-between w-full"
					>
						<p className="text-sm ">Contact</p>
						<figure className="h-4 w-4">
							<img
								className={`${
									contact ? "-rotate-180" : "rotate-0"
								} transition-all duration-300 ease-in-out`}
								src="/svg/arrow-down.svg"
								alt="contact"
							/>
						</figure>
					</button>
					<div
						className={`${
							contact ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
						} transition-all duration-300 ease-in-out grid md:hidden w-full `}
					>
						<ul className="overflow-hidden grid text-xs">
							<li className="sr-only">+447492914514</li>
							<li className="sr-only">mandipollo65@gmail.com</li>
							<li className=" cursor-pointer">+447492914514</li>
							<li className=" cursor-pointer">mandipollo65@gmail.com</li>
						</ul>
					</div>

					<ul className="hidden md:inline-block space-y-2">
						<li className="text-md">COMPANY</li>
						<li aria-label="About us" className=" cursor-pointer">
							About us
						</li>
						<li aria-label="Delivery " className=" cursor-pointer">
							Delivery
						</li>
						<li aria-label="Privacy policy" className=" cursor-pointer">
							Privacy policy
						</li>
					</ul>
					<ul className=" hidden md:inline-block space-y-2">
						<li className="text-md ">CONTACT</li>
						<li className="sr-only">+447492914514</li>
						<li className="sr-only">mandipollo65@gmail.com</li>
						<li className="cursor-pointer">+447492914514</li>
						<li className=" cursor-pointer">mandipollo65@gmail.com</li>
					</ul>
				</div>
			</section>

			<p className="text-xs text-wrap md:text-sm flex justify-center items-center w-full  border-t pt-10">
				Copyright 2024@ mandipollo.uk - All Right Reserved.
			</p>
		</footer>
	);
};

export default Footer;
