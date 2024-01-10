// useMemo: Allows you to memoize a value, only
//  recomputing it when
//  one of its dependencies changes.
import React, { useState, useMemo } from 'react';

function ExpensiveComputation() {
 const [count, setCount] = useState(0);
 const [value, setValue] = useState('');

 const result = useMemo(() => {
    console.log('Computing result...');
    return count * 2;
 }, [count]);

 return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Value: {value}</p>
      <button onClick={() => setValue('Hello, World!')}>Set value</button>
      <p>Result: {result}</p>
    </>
 );
}