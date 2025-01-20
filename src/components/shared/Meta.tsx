import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface MetaProps {
	title: string;
	description?: string;
	keywords?: string;
}
const Meta: React.FC<MetaProps> = ({ title, description, keywords }) => {
	useEffect(() => {
		// This will ensure the side effects (changing meta tags) happen only after the component is mounted
	}, []);
	return (
		<Helmet>
			<title>{title}</title>
			{description && <meta name="description" content={description}></meta>}
			{keywords && <meta name="keywords" content={keywords}></meta>}
		</Helmet>
	);
};

export default Meta;
