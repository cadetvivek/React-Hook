// useCallback: Allows you to memoize a callback function,
//  preventing unnecessary re-renders.
// jsx
import React, { useState, useCallback } from 'react';

function MemoizedCallback() {
 const [count, setCount] = useState(0);
 const [value, setValue] = useState('');

 const increment = useCallback(() => {
    setCount(count + 1);
 }, [count]);

 return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>Value: {value}</p>
      <button onClick={() => setValue('Hello, World!')}>Set value</button>
    </>
 );
}