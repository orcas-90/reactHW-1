import React from 'react';

import { Button } from './components/Buttons/Buttons';

const colors = {
  colorBlack: '#000000',
  colorWhite: '#FFFFFF',
  colorGrey: '#5F5F5F',
  colorLightGrey: '#CFCFCF',
};

const buttons = [
  {
    //;types: [ 'light-primary-disabled', 'light-secondary-normally', 'light-primary-normally',
    // 'light-secondary-normally','light-primary-hover', 'light-secondary-hover',
    // 'light-secondary-disabled', 'dark-primary-normally', 'dark-secondary-normally',
    //  'dark-primary-hover', 'dark-secondary-hover', 'dark-primary-disabled', 'dark-secondary-disabled']
    text: 'Hello',
    backgroundColor: colors.colorBlack,
    borderColor: colors.colorWhite,
    colorText: colors.colorGrey,
  },
  {
    text: 'Hello',
    backgroundColor: colors.colorWhite,
    borderColor: colors.colorLightGrey,
    colorText: colors.colorGrey,
  },
];
const App = () => {
  return (
    <div className="App">
      {buttons.map((button) => (
        <Button
          Background={button.backgroundColor}
          ColorText={button.colorText}
          ColorBorder={button.borderColor}
          text={button.text}
        />
      ))}
    </div>
  );
};

export { App };
