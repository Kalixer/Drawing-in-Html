import React from "react";

const ButtonDraw = () => {


    return (
        <>
            <div id="buttons">
                <button type="button" class="boton" id="boton_dibujar" onClick={draw}>Draw</button>
            </div>
        </>
    );
}

export default ButtonDraw;