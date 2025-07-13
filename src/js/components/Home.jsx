import React, { useState } from "react";

import Rojo from "./Colores/Rojo";
import Amarillo from "./Colores/Amarillo";
import Verde from "./Colores/Verde";

//create your first component
const Home = () => {
	const [CambiarColor, setCambiarColor] = useState("");

	return (
		<div>
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
	);
};

export default Home;