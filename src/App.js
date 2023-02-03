import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import TodoForm from './Components/TodoForm';
import TodoTable from './Components/TodoTable';
import { useState } from 'react';
import { AppBar, Typography, Button } from '@material-ui/core';
import { Home } from '@mui/icons-material';

function App() {
  const [todoId, setTodoId] = useState(null)
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<TodoForm todoId={todoId} setTodoId={setTodoId}/>}/>
      <Route path='/table' exact element={<TodoTable setTodoId={setTodoId}/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App