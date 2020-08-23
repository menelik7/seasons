import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
	const [lat, errorMessage] = useLocation();

	let content;
	if (errorMessage) {
		content = <div>Error: {errorMessage}</div>;
	} else if (lat) {
		return <SeasonDisplay lat={lat} />;
	} else {
		return <Spinner message="please accept the location request" />;
	}

	return <div className="border-red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
