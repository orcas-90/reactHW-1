import React from 'react';

import { cnButtons } from './Buttons.classname';

import type { FC } from 'react';

import './Buttons.css';

type ButtonsProps = {
	text: string,
    types: string[],

}

const Buttons: FC<ButtonsProps> = ({ text, types }) => {return (
   types.map((type) => <button  className={cnButtons( {type})}>
        {text} </button>))}



  export { Buttons };