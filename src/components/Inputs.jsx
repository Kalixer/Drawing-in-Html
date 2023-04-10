import React, { useContext } from "react";
import ButtonDraw from "./ButtonDraw";
import AppContext from "../context/AppContext";

const Inputs = () => {
    const { colors } = useContext(AppContext)
    
    const assign0 = () => {
        colors[0] = document.getElementById('Color0').value
        console.log(colors)
    }
    const assign1 = () => {
        colors[1] = document.getElementById('Color1').value
        console.log(colors)
    }
    const assign2 = () => {
        colors[2] = document.getElementById('Color2').value
        console.log(colors)
    }

    return (
        <div className="inputs">
            <p>Choose colors</p>
            <div>
                <p>Color 1</p>
                <input type="text" id="Color0" onChange={assign0}/>
            </div>
            <div>
                <p>Color 2</p>
                <input type="text" id="Color1" onChange={assign1}/>
            </div>
            <div>
                <p>Color 3</p>
                <input type="text" id="Color2" onChange={assign2}/>
            </div>
            <ButtonDraw/>
        </div>
    );
}

export default Inputs;