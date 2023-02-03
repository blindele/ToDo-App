import React, {useState} from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo, updateTodo } from '../actions';
import "./TodoForm.css";

const TodoForm = ({todoId,setTodoId}) => {
const [inputData,setInputData] = useState({
    title:"",
    Task: "",
    Date: "",

})
const dispatch = useDispatch()


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputData.title && inputData.Task && inputData.Date !== ""){
            if(todoId === null){
                dispatch(addTodo(inputData))
            }else{
                dispatch(updateTodo(todoId,inputData))
            }
            clear();
        navigate("/table")
        }
    }

    const clear = () =>{
        setTodoId(null);
        setInputData(null);
    }

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        setInputData({
            ...inputData, [name]: value
        })

    }
    return(
        <div>
            <form className='todo-form'>
            <h3 className='heading'>{todoId ? "Update Todo" : "Add Todo"}</h3>
            <input type="text" placeholder='Title' className='todo-input' name='title' value={inputData.title} onChange={handleChange}></input>
            <textarea type="message" placeholder='Task' className='todo-input' name='Task' value={inputData.Task} onChange={handleChange}></textarea>
            <input type="date" placeholder='Date' className='todo-input' name='Date' value={inputData.Date} onChange={handleChange}></input>
            <button className='todo-button' onClick={handleSubmit}>{todoId ? "Update Todo" : "Add Todo"}</button>
            </form>

        </div>
    )
}

export default TodoForm