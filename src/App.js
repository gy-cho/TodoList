import React, { useState } from 'react';
import './App.css';
import TodoListTemplate from './components/TodoListTemplate';
import CalendarTemplate from './components/Calendar/CalendarTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Toast from './components/Toast/Toast';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

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
      color: '#ffc0cb',
      isEdit: false,
    },
    {
      id: 1,
      text: ' 리액트 소개',
      checked: true,
      color: '#ffc0cb',
      isEdit: false,
    },
    {
      id: 2,
      text: ' 리액트 소개',
      checked: false,
      color: '#ffc0cb',
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
      { id: id, text: input, checked: false, color: '#ffc0cb', isEdit: false },
    ]);
    setId((prevId) => prevId + 1);
    setInput('');
    showToast(`success`, `할 일이 추가되었습니다.`);
  };

  const handleKeyDown = (e) => {
    // 한글 입력 후 엔터 시 마지막 글자 입력이 한번 더 발생하는 문제
    // nativeEvent.isComposing 조건을 추가해 해결
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      console.error('왜 두번')
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

  const onDateClick = (day) => {
    setSelectedDate(day);
  }

  return (
    <>
      <div className='flex'>
        <CalendarTemplate selectedDate={selectedDate} onDateClick={onDateClick}></CalendarTemplate>
        <TodoListTemplate
          week={selectedDate.toLocaleDateString('en-US', { weekday: 'short' })}
          day={selectedDate.getDate()}
          form={
            <Form
              value={input}
              onChange={handleChange}
              onCreate={handleCreate}
              onKeyDown={handleKeyDown}
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
