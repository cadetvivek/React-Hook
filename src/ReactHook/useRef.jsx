// useRef: Allows you to create a mutable ref 
// object. This is useful when you need a reference
//  to a child component, or a mutable 
// value that can be changed over time.

import React, { useRef } from 'react';

function TextInputWithFocusButton() {
 const inputRef = useRef(null);
 const onButtonClick = () => {
    inputRef.current.focus();
 };

 return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
 );
}