import React from "react";

const Rojo = ({ activo }) => {
    return (
        <div
            className="rounded-circle"
            style={{backgroundColor: activo ? "#ff0000ff" : "#450000ff",width: "100px",height: "100px"}}/>
    );
};

export default Rojo;