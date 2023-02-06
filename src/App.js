import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import TodoForm from './Components/TodoForm';
import TodoTable from './Components/TodoTable';
import { useState } from 'react';
import ResponsiveAppBar from './Components/Navbar';

function App() {
  const [todoId, setTodoId] = useState(null)
  return (
    <>
    <ResponsiveAppBar/>
    <BrowserRouter>
    <Routes>
      <Route path='/form' exact element={<TodoForm todoId={todoId} setTodoId={setTodoId}/>}/>
      <Route path='/' exact element={<TodoTable setTodoId={setTodoId}/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App