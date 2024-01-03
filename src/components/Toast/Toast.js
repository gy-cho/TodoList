import React, { useEffect } from 'react';
import styles from './Toast.module.css';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const toastStyles = {
  success: {
    background: '#f2f8f2e0',
    color: '#57a530',
    contentColor: '#3d6832',
    icon: 'ep:success-filled',
  },
  error: {
    background: '#FCF3F7e0',
    color: '#de605f',
    contentColor: '#792b2b',
    icon: 'ic:baseline-cancel',
  },
  warning: {
    background: '#FFFFF4e0',
    color: '#edca72',
    contentColor: '#8b7531',
    icon: 'bxs:error',
  },
  info: {
    background: '#F2F9FDe0',
    color: '#4481de',
    contentColor: '#2c475f',
    icon: 'material-symbols:info',
  },
};

const Toast = ({ visible, setVisible, type, msg }) => {
  const toastStyle = toastStyles[type];

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  });

  return (
    <>
      <div
        className={`${styles.toast} ${
          visible ? styles.visible : styles.hidden
        }`}
        style={{ backgroundColor: `${toastStyle.background}` }}
      >
        <div className={styles['content-wrapper']}>
          <Icon
            className={styles.icon}
            icon={toastStyle.icon}
            color={toastStyle.color}
            width='50'
          />
          <div>
            <b style={{ color: `${toastStyle.color}` }}>{type}</b>
            <div style={{ color: `${toastStyle.contentColor}` }}>{msg}</div>
          </div>
        </div>
      </div>
    </>
  );
};

Toast.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Toast;
