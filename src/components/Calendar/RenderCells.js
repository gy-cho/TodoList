import React from 'react';
import { format } from 'date-fns'
import { isSameMonth, isSameDay, addDays, parse  } from 'date-fns'
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns'
import {isSaturday, isSunday} from 'date-fns'
import styles from './RenderCells.module.css'


const RenderCells = ({currentMonth, selectedDate, onDateClick}) => {
  const monthStart = startOfMonth(currentMonth); //월의 시작일
  const monthEnd = endOfMonth(monthStart); //월의 마지막일
  const startDate = startOfWeek(monthStart); //주의 시작일
  const endDate = endOfWeek(monthEnd); //주의 마지막일
  
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        days.push(
            <div
                className={`${styles.day} ${
                    !isSameMonth(day, monthStart)
                        ? styles.disabled
                        : isSameDay(day, selectedDate)
                        ? styles.selected
                        : isSaturday(day) 
                        ? styles.saturday
                        : isSunday(day)
                        ? styles.sunday
                        : format(currentMonth, 'M') !== format(day, 'M')
                        ? styles['not-valid']
                        : styles.valid
                }`}
                key={day}
                onClick={() => onDateClick(cloneDay)}
            >
                <span
                    className={`
                          ${format(currentMonth, 'M') !== format(day, 'M')
                            ? 'text not-valid'
                            : ''}`
                    }
                >
                    {formattedDate}
                </span>
            </div>,
        );
        day = addDays(day, 1);
    }
    rows.push(
        <div className={`${styles.days}`} key={day}>
            {days}
        </div>,
    );
    days = [];
}
return <div className="body">{rows}</div>;
};

export default RenderCells;