import React, {useState} from 'react';
import styles from './CalendarTemplate.module.css';
import RenderHeader from './RenderHeader';
import RenderDays from './RenderDays';
import RenderCells from './RenderCells';
import { addMonths, subMonths } from 'date-fns'

const CalendarTemplate = ({ selectedDate, onDateClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  }
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  return (
    <div className={styles.calendar}>
      <RenderHeader className='header' currentMonth={currentMonth} prevMonth={prevMonth} nextMonth={nextMonth}></RenderHeader>
      <RenderDays className='days'></RenderDays>
      <RenderCells className='body' currentMonth={currentMonth} selectedDate={selectedDate} onDateClick={onDateClick}></RenderCells>
    </div>
  );
};

export default CalendarTemplate;