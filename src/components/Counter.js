import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../JS/Actions/actionCounter';

const Counter = () => {

    const dispatch = useDispatch()
    const x = useSelector(state => state.reducerCounter.count)


    return (<div>
        <button onClick={() => dispatch(increment())} >+</button>
        <h3>{x}</h3>
        <button onClick={() => dispatch(decrement())} >-</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>);
};

export default Counter;
