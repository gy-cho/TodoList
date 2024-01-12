import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';
import Palette from './Palette/Palette';
import { Icon } from '@iconify/react';
import CircleCheckOn from './Icon/CircleCheckOn';
import CircleCheckOff from './Icon/CircleCheckOff';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paletteVisible: false,
      editText: props.text,
    };
    this.animateRef = React.createRef();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.checked !== nextProps.checked ||
      this.props.color !== nextProps.color ||
      this.props.isEdit !== nextProps.isEdit ||
      this.props.text !== nextProps.text ||
      this.state.editText !== nextState.editText ||
      this.state.paletteVisible !== nextState.paletteVisible
    );
  }

  handlePaletteClick = (color) => {
    this.setState({ paletteVisible: false });
    this.props.onColorChange(this.props.id, color);
  };

  handlePalette = () => {
    this.setState({ paletteVisible: !this.state.paletteVisible });
  };

  handleEditChangeInput = (e) => {
    this.setState({ editText: e.target.value });
  };

  handleEdit = () => {
    if (this.props.isEdit)
      this.props.onEditInput(this.props.id, this.state.editText);
    this.props.onEdit(this.props.id, !this.props.isEdit);
  };

  handleToggle = () => {
    this.props.onToggle(this.props.id, !this.props.checked);
    // this.animateRef.current.beginElement();
  };

  render() {
    const { text, checked, id, color, isEdit, onRemove } = this.props;
    const { paletteVisible, editText } = this.state;
    return (
      <>
        <div className={styles['item-wrapper']}>
          <div
            className={styles.palette}
            style={{ background: color }}
            onClick={() => this.handlePalette()}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                this.handlePalette();
              }
            }}
            role='button'
            tabIndex='0'
          ></div>
          <div
            className={styles['todo-item']}
            onClick={() => this.handleToggle()}
            onKeyDown={() => {}}
            role='button'
            tabIndex='0'
          >
            <div
              className={styles.remove}
              onClick={(e) => {
                e.stopPropagation();
                onRemove(id);
              }}
              onKeyDown={() => {}}
              role='button'
              tabIndex='0'
            >
              &times;
            </div>
            <div
              className={`${styles['todo-text']} ${checked && styles.checked}`}
            >
              {isEdit ? (
                <input
                  type='text'
                  value={editText}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      this.handleEdit();
                    }
                  }}
                  onChange={(e) => {
                    this.handleEditChangeInput(e);
                  }}
                />
              ) : (
                <div>{text}</div>
              )}
            </div>
            <div
              className={`${styles.icon} ${styles.edit}`}
              onClick={(e) => {
                e.stopPropagation();
                this.handleEdit();
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  this.handleEdit();
                }
              }}
              role='button'
              tabIndex='0'
            >
              <Icon
                icon='mdi:edit'
                color={isEdit ? '#3acb8a' : '#ddd'}
                width='20'
                height='20'
              ></Icon>
            </div>

            <div className={styles.icon}>
              {checked ? (
                <CircleCheckOn></CircleCheckOn>
              ) : (
                <CircleCheckOff></CircleCheckOff>
              )}
            </div>
          </div>

          <Palette
            visible={paletteVisible}
            onClick={this.handlePaletteClick}
          ></Palette>
        </div>
      </>
    );
  }
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onEditInput: PropTypes.func.isRequired,
};

export default TodoItem;
