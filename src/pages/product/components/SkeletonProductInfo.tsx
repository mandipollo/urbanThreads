import Skeleton from "react-loading-skeleton";

const SkeletonProductInfo = () => {
	return (
		<div className="h-full">
			<div className="sticky top-4 flex flex-col p-2 md:p-10 gap-10">
				<div className="w-full justify-center items-center">
					<div>
						<h4 id="product-name">
							<Skeleton count={1} />
						</h4>
						<p role="definition">
							<Skeleton width={20} count={1} />
						</p>
					</div>
				</div>
				<div className="flex flex-col gap-10">
					<h4>SELECT SIZE: </h4>
					<div className="grid grid-cols-5">
						<Skeleton count={1} />
					</div>
					<Skeleton count={1} />
				</div>
				<div className="w-full gap-10 flex flex-col">
					<div className="flex flex-col gap-2">
						<h4>DESCRIPTION</h4>
						<Skeleton count={1} />
					</div>
					<div className="flex flex-col gap-2">
						<h4>DELIVERY AND PAYMENT</h4>
						<p role="definition">
							Free standard delivery for members when spending £30 or more.
							Click and Collect free for all. Free and flexible returns for
							members. We accept card payments via MasterCard and Visa. You can
							also pay by Klarna, PayPal, Apple Pay or use your giftcard. Find
							out more on our customer service pages.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkeletonProductInfo;
