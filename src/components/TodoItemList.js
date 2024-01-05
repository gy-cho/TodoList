import React, { Component } from 'react';
import PropTypes from 'prop-types'; // PropTypes 추가
import TodoItem from './TodoItem';
import styles from './TodoItemlist.module.css'

class TodoItemList extends Component {
  // constructor() {
  //   super();
  // }

  shouldComponentUpdate(nextProps) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove, onColorChange, onEdit, onEditInput } =
      this.props;

    const todoList = todos.map(({ id, text, checked, color, isEdit }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemove={onRemove}
        onColorChange={onColorChange}
        onEdit={onEdit}
        onEditInput={onEditInput}
        color={color}
        isEdit={isEdit}
        key={id}
      ></TodoItem>
    ));

    return <div className={styles.list}>{todoList}</div>;
  }
}

TodoItemList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onEditInput: PropTypes.func.isRequired,
};
export default TodoItemList;
