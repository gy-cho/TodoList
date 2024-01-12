import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ value, onChange, onCreate, onKeyDown }) => {
  return (
    <div className={styles.form}>
      <input value={value} onChange={onChange} onKeyDown={onKeyDown} />
      <div
        className={styles['create-button']}
        onClick={onCreate}
        onKeyDown={(e) => {}}
        role='button'
        tabIndex='0'
      >
        +
      </div>
    </div>
  );
};
Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default Form;
