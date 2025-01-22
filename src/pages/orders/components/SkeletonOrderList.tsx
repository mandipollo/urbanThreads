import Skeleton from "react-loading-skeleton";
import Button from "../../../components/ui/Button";

const SkeletonOrderList = () => {
	return (
		<div className="flex w-full h-full text-xs lg:text-sm">
			<ul className="flex flex-col w-full gap-2 max-w-7xl">
				{Array.from({ length: 2 }).map((_, index) => (
					<li className="flex flex-col w-full border rounded-md" key={index}>
						<div className="bg-[#EFF2F2] p-2 flex flex-col lg:flex-row justify-between">
							<div className="flex gap-2 lg:gap-6">
								<div>
									<p className="font-normal"> ORDER PLACED</p>
									<Skeleton count={1} />
								</div>
								<div>
									<p className="font-normal"> TOTAL</p>
									<Skeleton count={1} />
								</div>
								<div>
									<p className="font-normal"> ORDER STATUS</p>
									<Skeleton count={1} />
								</div>
							</div>

							<div>
								<p> ORDER NO</p>
								<Skeleton count={1} />
							</div>
						</div>

						<ul className="flex flex-col space-y-2 w-full p-2 rounded-md">
							{Array.from({ length: 2 }).map((_, index) => (
								<li
									className="grid grid-cols-1 gap-2 sm:grid-cols-[2fr_1fr]  items-center p-2"
									key={index}
								>
									<div className="flex flex-row items-center gap-2">
										<figure>
											<Skeleton count={1} />
										</figure>
										<div className=" flex flex-col ">
											<Skeleton count={1} />
											<p>Size:</p>
											<Skeleton count={1} />
										</div>
									</div>

									<div className="flex flex-col gap-2">
										<Button text="Track package" />
										<button className="border hover:bg-slate-50 px-2 py-4">
											Leave a review
										</button>
									</div>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SkeletonOrderList;
