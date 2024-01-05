import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <div className={styles.form}>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <div
        className={styles['create-button']}
        onClick={onCreate}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onCreate();
          }
        }}
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
  onKeyPress: PropTypes.func.isRequired,
};

export default Form;
