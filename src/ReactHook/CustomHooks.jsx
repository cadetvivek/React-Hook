// Custom Hooks: Allows you to create reusable 
// state logic in functional components. Custom hooks
//  are simply functions that use hooks and follow 
// the naming convention use<Name>.
import React, { useState, useEffect } from 'react';

function useCounter(initialCount) {
 const [count, setCount] = useState(initialCount);
 const increment = () => setCount(count + 1);
 const decrement = () => setCount(count - 1);

 return { count, increment, decrement };
}

function Counter() {
 const { count, increment, decrement } = useCounter(0);

 return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
 );
}