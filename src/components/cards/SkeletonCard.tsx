import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonCard: React.FC<{ cards: number }> = ({ cards }) => {
	return Array.from({ length: cards }).map((_, index) => (
		<li
			key={index}
			role="article"
			className="flex flex-col group snap-always snap-start "
		>
			<figure className={`overflow-hidden w-full group relative aspect-[3/4] `}>
				<Skeleton className="h-full" />
			</figure>
			<div className="flex flex-col gap-2 py-2">
				<Skeleton count={1} />
				<Skeleton count={1} />
			</div>
		</li>
	));
};

export default SkeletonCard;
