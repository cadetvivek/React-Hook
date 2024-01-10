// useContext: Allows you to subscribe to a
//  context object and read its value.
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function ThemedButton() {
 const theme = useContext(ThemeContext);

 return (
    <button theme={theme}>
      I'm a themed button
    </button>
 );
}