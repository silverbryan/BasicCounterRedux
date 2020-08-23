import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  const handleClick = (action) => {
    dispatch(action());
  }

  return (
    <header>
      <h1>Counter: {counter}</h1>

      <input onClick={() => handleClick(increment)} type="button" value="+" className="plus"/>
      <input onClick={() => handleClick(decrement)} type="button" value="-" className="minus"/>
      
    </header>
  );
}

export default Counter;