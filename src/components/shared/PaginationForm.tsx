import React, { SetStateAction } from "react";

interface PaginationFormProps {
	page: number;
	setPage: React.Dispatch<SetStateAction<number>>;
	totalPages: number;
}

const PaginationForm: React.FC<PaginationFormProps> = ({
	page,
	setPage,
	totalPages,
}) => {
	const handlePrevPage = () => {
		if (page > 0) {
			setPage(page - 1);
		}
	};

	const handleNextPage = () => {
		if (page < totalPages && page !== totalPages - 1) {
			setPage(page + 1);
		}
	};
	return (
		<div className="flex flex-row justify-between w-full p-2">
			<button
				disabled={page === 0}
				onClick={handlePrevPage}
				className="flex flex-row space-x-1 justify-center items-center"
			>
				<figure>
					<img src="/svg/arrow-left.svg" alt="previous " className="h-4 w-4" />
				</figure>
				<p className={`${page === 0 && "text-gray-400"}`}>Previous</p>
			</button>
			<p>
				{page + 1} of {totalPages}
			</p>
			<button
				disabled={page === totalPages - 1}
				onClick={handleNextPage}
				className="flex flex-row space-x-1 justify-center items-center"
			>
				<p className={`${page === totalPages - 1 && "text-gray-400"}`}>Next</p>
				<figure>
					<img src="/svg/arrow-right.svg" alt="next " className="h-4 w-4" />
				</figure>
			</button>
		</div>
	);
};

export default PaginationForm;
