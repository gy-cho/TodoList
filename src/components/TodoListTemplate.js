import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoListTemplate.module.css';

const TodoListTemplate = ({ form, children }) => {
  return (
    <main className={styles['todo-list-template']}>
      <div className={styles.title}>TO-DO LIST</div>
      <section className={styles[`form-wrapper`]}>{form}</section>
      <section className={styles[`todos-wrapper`]}>{children}</section>
    </main>
  );
};

TodoListTemplate.propTypes = {
  form: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default TodoListTemplate;
