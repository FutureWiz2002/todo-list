import React from 'react';

const Todo = ({text, todos, setTodos, todo}) => {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))   
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' :''}`}>{text}</li>
            <button className='complete-button' onClick={completeHandler} >
                Complete
            </button>
            <button className='trash-button' onClick={deleteHandler}>
                Delete
            </button>
        </div>

    );
}

export default Todo;