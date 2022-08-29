import React from 'react';

//importing component
import Todo from './todo'

const Todolist = ({todos, setTodos, fliteredtodos}) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {fliteredtodos.map(todo => (
                    <Todo 
                        todos={todos} 
                        setTodos={setTodos} 
                        text={todo.text} 
                        key={todo.id}
                        todo = {todo}/>
                ))}
            </ul>
        </div>

    );
};
export default Todolist;