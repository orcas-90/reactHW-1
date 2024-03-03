import React from 'react';

import { Buttons } from './components/Buttons/Buttons';



const button =
[
  {
    types: [ 'light-primary-disabled', 'light-secondary-normally', 'light-primary-normally',
    'light-secondary-normally','light-primary-hover', 'light-secondary-hover',
    'light-secondary-disabled', 'dark-primary-normally', 'dark-secondary-normally',
     'dark-primary-hover', 'dark-secondary-hover', 'dark-primary-disabled', 'dark-secondary-disabled'],
    text: "Hello",
  }
]
const App = () => {
  return <div className="App">
	{button.map((buttonn) => <Buttons types = {buttonn.types} text = {buttonn.text} />)}
  </div>;
};

export { App };