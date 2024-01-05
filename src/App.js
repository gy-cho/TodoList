import React, { useState } from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import CalendarTemplate from './components/Calendar/CalendarTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Toast from './components/Toast/Toast';

function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [id, setId] = useState(3);
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: ' 리액트 소개',
      checked: false,
      color: '#e64980',
      isEdit: false,
    },
    {
      id: 1,
      text: ' 리액트 소개',
      checked: true,
      color: '#e64980',
      isEdit: false,
    },
    {
      id: 2,
      text: ' 리액트 소개',
      checked: false,
      color: '#f39c12',
      isEdit: false,
    },
  ]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCreate = () => {
    if (!input) {
      showToast('warning', '할 일을 입력해주세요.');
      return;
    }

    setTodos((prevTodos) => [
      ...prevTodos,
      // color: '' 로 해도 default 색상이 자동 할당되지만 color 데이터가 null이 되므로 기본값 설정
      { id: id, text: input, checked: false, color: 'e64980', isEdit: false },
    ]);
    setId((prevId) => prevId + 1);
    setInput('');
    showToast(`success`, `할 일이 추가되었습니다.`);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreate();
    }
  };

  const handleRemove = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    showToast(`success`, `할 일이 삭제되었습니다.`);
  };

  const handleToggle = (id, changeChecked) => {
    handleUpdateTodo(id, { checked: changeChecked });
  };

  const handleColorChange = (id, changeColor) => {
    handleUpdateTodo(id, { color: changeColor });
  };

  const handleEdit = (id, changeIsEdit) => {
    handleUpdateTodo(id, { isEdit: changeIsEdit });
  };

  const handleEditInput = (id, newText) => {
    handleUpdateTodo(id, { text: newText });
  };

  const handleUpdateTodo = (id, updates) => {
    setTodos((prevTodos) => {
      const index = prevTodos.findIndex((todo) => todo.id === id);
      const selected = prevTodos[index];
      return [
        ...prevTodos.slice(0, index),
        {
          ...selected,
          ...updates,
        },
        ...prevTodos.slice(index + 1),
      ];
    });
  };

  const showToast = (type, msg) => {
    setToastType(type);
    setToastVisible(true);
    setToastMessage(msg);
  };

  return (
    <>
      <div className='flex'>
        <CalendarTemplate></CalendarTemplate>
        <TodoListTemplate

          form={
            <Form
              value={input}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
            />
          }
        >
          <TodoItemList
            todos={todos}
            onToggle={handleToggle}
            onRemove={handleRemove}
            onColorChange={handleColorChange}
            onEdit={handleEdit}
            onEditInput={handleEditInput}
          ></TodoItemList>
        </TodoListTemplate>
        <Toast
          visible={toastVisible}
          setVisible={setToastVisible}
          type={toastType}
          msg={toastMessage}
        ></Toast>

        {/* TEST */}
        {/* {todos.map((item) => (
          <div key={item.id}>
            {item.text} {item.color} {`${item.isEdit}`}
          </div>
        ))} */}

        {/* <button onClick={() => showToast('success', '성공 토스트 입니다.')}>
          성공
        </button>
        <button onClick={() => showToast('warning', '경고 토스트 입니다.')}>
          경고
        </button>
        <button onClick={() => showToast('error', '오류 토스트 입니다.')}>
          오류
        </button>
        <button onClick={() => showToast('info', '정보 토스트 입니다.')}>
          정보
        </button> */}
      </div>
    </>
  );
}

export default App;
