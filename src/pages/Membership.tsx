import Button from "../components/shared/Button";

const Membership = () => {
	return (
		<section className="flex flex-col h-full ">
			<h2 className="font-bold text-2xl">URBAN MEMBERS EXPERIENCE MORE</h2>
			<p className="max-w-96">
				As a Urban member, experience exclusive benefits, discounts and more.
				Our complimentary loyalty programme offers you the ability to seamlessly
				earn points while enjoying unparalleled perks and promotions. Enroll now
				and receive 10% off your first purchase.
			</p>
			<Button text="EXPERIENCE MORE"></Button>
		</section>
	);
};

export default Membership;
