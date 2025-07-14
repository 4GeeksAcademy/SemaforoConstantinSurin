import React from "react";

const Purpura = ({ activo }) => {
    return (
        <div
            className="rounded-circle"
            style={{backgroundColor: activo ? "#ff00ffff" : "#4b004bff",width: "100px",height: "100px"}}/>
    );
};

export default Purpura;