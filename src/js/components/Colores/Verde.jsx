import React from "react";

const Verde = ({ activo }) => {
	return (
		<div className="rounded-circle" style={{backgroundColor: activo ? "#37ff00ff" : "#113d02ff",width: "100px",height: "100px"}}/>
	);
};

export default Verde;
