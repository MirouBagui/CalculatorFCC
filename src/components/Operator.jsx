import React, {useState} from 'react';
import useGlobal from "../store";

const mapState = (state) => state;

const mapActions = (actions) => ({
    handleClick: actions.handleClick
})

const Operator = () => {  

    const [state] = useGlobal(mapState);
    const operator = state.operation[0];
    const [, actions] = useGlobal(null, mapActions);

    const operation = Object.entries(operator).map(
        ([key,value]) => ( 
        <div className="btn" id={key} key={key} 
            onClick={() => actions.handleClick(value)
                }>
        {value}
         </div> ));
    return(
        <> 
            {operation}
        </>
    )
}

export default Operator;
