import React from 'react';

const CircleCheckOn = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      viewBox='0 0 24 24'
    >
      <g
        stroke='#3acb8a'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      >
        <circle cx='12' cy='12' r='9' fill='#3acb8a' fillOpacity='.3' />
        <path
          fill='none'
          strokeDasharray='14'
          strokeDashoffset='strokeDashOffset'
          d='M8 12L11 15L16 10'
        >
          <animate
            attributeName='stroke-dashoffset'
            dur='0.3s'
            values='14;0'
            fill='freeze'
          />
        </path>
      </g>
    </svg>
  );
};

export default CircleCheckOn;
