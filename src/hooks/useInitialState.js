import { useState } from 'react';

const useInitialState = () => {
    const [colors, setColors] = useState(['', '', ''])

    const addColor = (brushes) => {
        color[0] = brushes[0]
        color[1] = brushes[1]
        color[2] = brushes[2]
    }
    const resetColor = () => {
        setColors(colors.map(item => item = ''))
    }

    return { colors, addColor, resetColor }
}

export default useInitialState;