import React from 'react';

import { cnButton } from './Buttons.classname';

import type { FC } from 'react';

import './Buttons.css';

type ButtonProps = {
  text: string;
  Background?: string;
  ColorText?: string;
  ColorBorder?: string;
};

const Button: FC<ButtonProps> = ({
  text,
  Background,
  ColorText,
  ColorBorder,
}) => {
  return (
    <div>
      <button
        className={cnButton({})}
        style={{
          backgroundColor: Background,
          color: ColorText,
          border: '2px solid ' + ColorBorder,
        }}
      >
        {text}
      </button>
    </div>
  );
};

export { Button };
