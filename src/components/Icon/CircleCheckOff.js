import React from 'react';

const CircleCheckOff = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 24 24'
    >
      <g
        fill='none'
        stroke='#ddd'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <circle cx='12' cy='12' r='9' />
        <path strokeDasharray='14' d='M8 12L11 15L16 10'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.3s'
            values='28;14'
          />
        </path>
      </g>
    </svg>
  );
};

export default CircleCheckOff;
