import React, { useEffect, useRef } from 'react';
import styles from './Palette.module.css';
import PropTypes from 'prop-types';

const Palette = ({ visible, onClick }) => {
  const colorList = [
    // '#000000', // 기본 검정색
    // '#FFFFFF', // 기본 흰색
    '#ffc0cb', // 연한 분홍색
    '#add8e6', // 연한 파란색
    '#98fb98', // 연한 녹색
    '#fa8072', // 연한 빨간색
    '#ffcc66', // 연한 주황색
    '#dda0dd', // 연한 보라색
    '#d3d3d3', // 연한 회색
    '#afeeee', // 연한 청록색
    '#f4a460', // 연한 갈색
  ];
  const paletteRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(paletteRef.current && !paletteRef.current.contains(event.target)) {
        onClick('#e64980');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };

    // if (visible) {
    //   const timer = setTimeout(() => {
    //   }, 2000);

    //   return () => {
    //     clearTimeout(timer);
    //   };
    // }
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
                onKeyDown={(e) => {}}
                role='button'
                tabIndex='0'
              ></div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

Palette.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Palette;
