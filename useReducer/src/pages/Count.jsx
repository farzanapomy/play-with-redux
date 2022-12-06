import React from 'react';
import { useReducer } from 'react';

const Count = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type == 'Increment') {
      return state + action.payload.count;
    } else if (action.type == 'Decrement') {
      console.log(action);
      return state - action.payload.count;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="p-64 mt-42 flex flex-col max-w-xs space-y-6 shadow-md ">
      <h1 className="mx-auto position relative font-bold text-30">{state}</h1>
      <div className="flex justify-center items-center">
        <button
          className="px-4 py-3 bg-indigo-300 text-white rounded-md mx-8"
          onClick={() =>
            dispatch({ type: 'Increment', payload: { count: 5, text: 'Wow' } })
          }
        >
          Increment
        </button>
        <button
          className="px-4 py-3 bg-sky-200 text-white rounded-md"
          onClick={() =>
            dispatch({ type: 'Decrement', payload: { count: 5, text: 'Wow' } })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Count;
