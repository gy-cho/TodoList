import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListTemplate.module.css';

const TodoListTemplate = ({ week, day, form, children }) => {
  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
  
    const lastDigit = day % 10;
  
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  return (
    <main className={styles['todo-list-template']}>
      <div className={styles.title}>{week}, {day}{getDaySuffix(day)}</div>
      <section className={styles[`form-wrapper`]}>{form}</section>
      <section className={styles[`todos-wrapper`]}>{children}</section>
    </main>
  );
};

TodoListTemplate.propTypes = {
  week: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,

  form: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default TodoListTemplate;
