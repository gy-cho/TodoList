import React, { useEffect } from 'react';
import styles from './Palette.module.css';
import PropTypes from 'prop-types';

const Palette = ({ visible, onClick }) => {
  const colorList = [
    // '#000000', // 기본 검정색
    // '#FFFFFF', // 기본 흰색
    '#e64980', // default
    '#3498db', // 파란색
    '#2ecc71', // 녹색
    '#e74c3c', // 빨간색
    '#f39c12', // 주황색
    '#9b59b6', // 보라색
    '#34495e', // 짙은 회색/블루그레이
    '#1abc9c', // 청록색
    '#e67e22', // 갈색/주황갈색
  ];

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        // setVisible(false);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  });

  return (
    <>
      {visible && (
        <div
          className={`${styles['palette-wrapper']} ${
            visible ? styles.visible : styles.hidden
          }`}
        >
          <div className={styles.colors}>
            {colorList.map((color, index) => (
              <div
                className={styles['color-item']}
                style={{ backgroundColor: color }}
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(color);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onClick(color);
                  }
                }}
                role='button'
                tabIndex='0'
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
    // <div
    //   className={`${styles.toast} ${visible ? styles.visible : styles.hidden}`}
    // >
    //   {msg}
    // </div>
  );
};

Palette.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  // setVisible: PropTypes.func.isRequired,
};

export default Palette;
