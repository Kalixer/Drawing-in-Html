import React from "react";
import ButtonDraw from "./ButtonDraw";

const Inputs = () => {
    return (
        <div className="inputs">
            <p>Choose colors</p>
            <div>
                <p>Color 1</p>
                <input type="text" id="Color1" />
            </div>
            <div>
                <p>Color 2</p>
                <input type="text" id="Color2" />
            </div>
            <div>
                <p>Color 3</p>
                <input type="text" id="Color3" />
            </div>
            <ButtonDraw/>
        </div>
    );
}

export default Inputs;