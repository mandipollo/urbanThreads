const convertDate = (input: string | number | Date): string => {
	// Ensure the input is a valid Date object
	const date = new Date(input);

	// Check if the date is valid
	if (isNaN(date.getTime())) {
		throw new Error("Invalid date input");
	}

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const yyyy = date.getFullYear();
	const mm = months[date.getMonth()];
	const dd = date.getDate().toString().padStart(2, "0");

	return `${dd} ${mm} ${yyyy}`;
};

export default convertDate;
