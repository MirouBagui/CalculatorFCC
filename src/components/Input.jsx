import React from 'react';
import useGlobal from "../store";

const mapState = (state) => state;

const Input = () =>  {
    const [state] = useGlobal(mapState);
    let calc = state.calc;
    let evaluate = state.evaluate;
    console.log(evaluate)
    return (
        <div className={evaluate ? "input evaluate" : "input"} id="display">
            {calc}
        </div>
    )
}

export default Input;
