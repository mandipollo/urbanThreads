import axios from "axios";

const fetchUserDataService = async (token: string) => {
	const response = await axios.post(
		"/api/user/user-details",
		{},
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);

	return response;
};

export default fetchUserDataService;
