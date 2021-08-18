import React, {useState} from 'react';
import useGlobal from "../store";

const mapState = (state) => state;

const mapActions = (actions) => ({
    handleClick: actions.handleClick
})

const Button = () => {  

    const [state] = useGlobal(mapState);
    const numbers = state.numbers[0];
    const [, actions] = useGlobal(null, mapActions);

    const digits = Object.entries(numbers).map(
        ([key,value]) => (  
        <div className='btn' id={`${key}`} key={key} 
            onClick={
                () => actions.handleClick(value)
            }>
            {value}
            </div> ));
    return(
        <> 
            {digits}
        </>
    )
}

export default Button;
