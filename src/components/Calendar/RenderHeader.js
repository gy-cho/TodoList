import React from 'react';
import { format } from 'date-fns'
import {Icon} from '@iconify/react'
import styles from './RenderHeader.module.css'
const RenderHeader = ({currentMonth, prevMonth, nextMonth}) => {
  return (
    <div className={styles.header}>
      <span> {format(currentMonth, 'MMM')} </span>
      {format(currentMonth, 'yyyy')}
      <div className={styles.icon}>
        <Icon icon="tabler:circle-arrow-left-filled" width={20} onClick={prevMonth}/>
        <Icon icon="tabler:circle-arrow-right-filled" width={20} onClick={nextMonth}/>
      </div>
    </div>
  );
};

export default RenderHeader;