import React from 'react';
import { TodoListItem } from './TodoListItem';
import { Todo, ToggleTodo } from './types';



interface TodoListProps{
    todos :Array<Todo>
    toggleTodo:ToggleTodo;
}

export const TodoList:React.FC<TodoListProps> =({todos,toggleTodo}) =>{
return (
<ul>
    {todos.map(todos=>{
    return <TodoListItem todo= {todos} toggleTodo={toggleTodo}/>;
})}
</ul>
    );

};