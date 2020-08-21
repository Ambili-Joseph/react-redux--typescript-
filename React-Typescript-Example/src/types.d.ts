import { type } from "os";

export type Todo ={
    text:String;
    complete:boolean;
}
type ToggleTodo =(selectedTodo:Todo) =>void;
type AddTodo=(newtodo:string)=>void;