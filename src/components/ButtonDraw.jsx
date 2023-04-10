import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const ButtonDraw = () => {
    const { colors } = useContext(AppContext)

    const draw = () => {
        console.log(colors)
    }
    return (
        <>
            <div id="buttons">
                <button type="button" class="boton" id="boton_dibujar" onClick={draw}>Draw</button>
            </div>
        </>
    );
}

export default ButtonDraw;