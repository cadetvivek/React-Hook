// useEffect: Lets you perform side effects, 
// such as data fetching, subscriptions, or manually 
// changing the DOM, in a functional component.

import React, { useState, useEffect } from 'react';

function Example() {
 const [count, setCount] = useState(0);

 useEffect(() => {
    document.title = `You clicked ${count} times`;
 });

 return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
 );
}