import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>todos</h1>
      <div style={styles.todoBox}>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          style={styles.input}
        />
        <ul style={styles.taskList}>
          {tasks.length === 0 ? (
            <li style={styles.noTasks}>No hay tareas, añadir tareas</li>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                style={styles.taskItem}
                onMouseEnter={(e) => e.currentTarget.querySelector('button').style.visibility = 'visible'}
                onMouseLeave={(e) => e.currentTarget.querySelector('button').style.visibility = 'hidden'}
              >
                {task}
                <button
                  onClick={() => handleDelete(index)}
                  style={styles.deleteButton}
                >
                  🗑️
                </button>
              </li>
            ))
          )}
        </ul>
        <div style={styles.footer}>
          {tasks.length} {tasks.length === 1 ? 'item' : 'items'} left
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '72px',
    color: '#e6e6e6',
    position: 'absolute',
    top: '20px',
    textAlign: 'center',
    width: '100%',
  },
  todoBox: {
    background: 'white',
    width: '400px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    padding: '20px',
  },
  input: {
    width: '100%',
    padding: '15px',
    border: 'none',
    fontSize: '18px',
    boxSizing: 'border-box',
    outline: 'none',
    borderBottom: '2px solid #ededed',
  },
  taskList: {
    listStyleType: 'none',
    paddingLeft: 0,
    marginTop: '20px',
  },
  noTasks: {
    textAlign: 'center',
    color: '#d9d9d9',
    fontStyle: 'italic',
  },
  taskItem: {
    padding: '15px 10px',
    borderBottom: '1px solid #ededed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '18px',
    transition: 'background 0.3s',
  },
  deleteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#cc9a9a',
    visibility: 'hidden',
  },
  footer: {
    textAlign: 'left',
    fontSize: '14px',
    color: '#777',
    marginTop: '20px',
  },
};

export default TodoApp;

