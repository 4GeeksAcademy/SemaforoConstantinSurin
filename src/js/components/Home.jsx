import React, { useState } from "react";

import Rojo from "./Colores/Rojo";
import Amarillo from "./Colores/Amarillo";
import Verde from "./Colores/Verde";
import Purpura from "./Colores/Purpura";

//create your first component
const Home = () => {
	const [CambiarColor, setCambiarColor] = useState("");

	return (
		<div className="container-fluid d-flex justify-content-center align-items-center flex-column" style={{ height: "325px",width:"115px", backgroundColor: "#000000" }}>
			

			<div className="" style={{ height: "350px", backgroundColor: "#000000ff", width: "100px" }}>

				<div onClick={() => setCambiarColor("rojo")}>
					<Rojo activo={CambiarColor === "rojo"} />
				</div>
				<div onClick={() => setCambiarColor("amarillo")}>
					<Amarillo activo={CambiarColor === "amarillo"} />
				</div>
				<div onClick={() => setCambiarColor("verde")}>
					<Verde activo={CambiarColor === "verde"} />
				</div>
				
			</div>
			<button style={{background:"black",border:"black",position: "absolute", top: "100px", left: "570px"}} onClick={() => setCambiarColor(CambiarColor === "purpura" ? "" : "purpura")}>
					<Purpura activo={CambiarColor === "purpura"} />
				</button>
			<div style={{ height: "450px", width: "50px", backgroundColor: "#000000", position: "absolute", top: "300px"}}>

				<button  style={{width: "50px",height: "50px",position: "absolute", left: "0px", top: "200px", fontSize:"35px"}} onClick={() => setCambiarColor(CambiarColor === "" ? "rojo" : CambiarColor === "rojo" ? "amarillo" : "verde")}>↓</button>
				<button  style={{width: "50px",height: "50px",position: "absolute", left: "0px", top: "150px", fontSize:"35px"}} onClick={() => setCambiarColor(CambiarColor === "" ? "verde" : CambiarColor === "verde" ? "amarillo" : "rojo")}>↑</button>
				</div>


		</div >

	);
};

export default Home;