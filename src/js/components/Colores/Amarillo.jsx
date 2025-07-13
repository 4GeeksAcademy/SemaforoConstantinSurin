import React from "react";

const Amarillo = ({ activo }) => {
	return (
		<div
			className="rounded-circle"
			style={{backgroundColor: activo ? "#f6ff00ff" : "#6d7004ff",width: "100px",height: "100px"}}/>
	);
};

export default Amarillo;