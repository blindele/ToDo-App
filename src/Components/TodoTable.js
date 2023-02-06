import { TableBody, TableContainer} from "@material-ui/core";
import {TableHead, Paper, Table, TableRow, TableCell, Box } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import {Link} from 'react-router-dom'
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteTodo } from "../actions";

const TodoTable = ({setTodoId}) => {
const todoList = useSelector((state) => state.allReducers.todoList);
const dispatch = useDispatch();


    return(
        <>
        <Paper>

        <TableContainer component={Paper}>
            <Table sx={{minWidth:650}}>
                <TableHead>
<TableRow>
    <TableCell>Title</TableCell>
    <TableCell>Task</TableCell>
    <TableCell>Date</TableCell>
    <TableCell>Update</TableCell>
    <TableCell>Delete</TableCell>
</TableRow>

                </TableHead>
                <TableBody>
                    {
                        todoList.map((elem) => {
                            return (
                                <TableRow key={elem.id}>
    <TableCell>{elem.data.title}</TableCell>
    <TableCell>{elem.data.Task}</TableCell>
    <TableCell>{elem.data.Date}</TableCell>
    <TableCell>
        <Link to="/form">
        <BorderColorIcon onClick={()=>setTodoId(elem.id)}/>
        </Link>
    </TableCell>
    <TableCell>
        <DeleteOutlineIcon onClick={()=>dispatch(deleteTodo(elem.id))}/>
        </TableCell>
</TableRow>
                                
                            )

                        })
                    }

</TableBody>


            </Table>

        </TableContainer>
        <Link to="/form">
        <Box display='flex' justifyContent='center' alignItems='center' component={Paper} mt={2} minHeight="2rem">
            <AddIcon/>
            ADD TODO
        </Box>
        
        </Link>
        </Paper>
        </>
    )
}

export default TodoTable