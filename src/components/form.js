import React from 'react';

// Start here

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form class='form' placeholder='Type your to-dos'>
            <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' />
            <button onClick={submitTodoHandler} type='submit' className='todo-button'  >
                <st>Add to list</st>
            </button>
            <div className='select'>
                <select onChange={statusHandler} className='filter-todo'>
                    <option value ='all'>All</option>
                    <option value='completed'>completed</option>
                    <option value='uncompleted'>uncompleted</option>
                </select>
            </div>
        </form>
    )
}
export default Form;