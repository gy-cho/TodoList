import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListTemplate.module.css';

const TodoListTemplate = ({ calendar, form, children }) => {
  return (
    <main className={styles['todo-list-template']}>
      <div className={styles.title}>Friday, 4th</div>
      <section className={styles[`form-wrapper`]}>{form}</section>
      <section className={styles[`todos-wrapper`]}>{children}</section>
    </main>
  );
};

TodoListTemplate.propTypes = {
  calendar: PropTypes.node.isRequired,
  form: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default TodoListTemplate;
