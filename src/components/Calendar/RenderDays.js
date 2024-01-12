import React from 'react';
import styles from './RenderDays.module.css'
const RenderDays = () => {
  const days = [];
  const date = ['Sun', 'Mon', 'The', 'Wed', 'Thu', 'Fri', 'Sat']

for (let i=0; i<7; i++){
  days.push (
    <div className={`${styles.day}`} key={i}>{date[i]}</div>
  )
}

  return (
    <div className={`${styles.days}`}>
      {days}
    </div>
  );
};

export default RenderDays;