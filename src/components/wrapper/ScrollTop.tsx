// src/components/ScrollToTop.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopProps {
	children: React.ReactNode;
}

const ScrollToTop: React.FC<ScrollToTopProps> = props => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, [location]);

	return <>{props.children}</>;
};

export default ScrollToTop;
