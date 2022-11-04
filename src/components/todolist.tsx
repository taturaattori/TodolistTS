import React, {useState} from 'react';
import Todotable from './todotable';



function Todolist() {

  interface ITodo {
    desc: string,
    date: string,
    priority: string
  }

  const [todo, setTodo] = useState<ITodo>({} as ITodo);
  const [todos, setTodos] = useState<Array<ITodo>>([]);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  }

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, [event.target.id]: event.target.value});
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(todo)
  }

  const deleteItem = (index: any) => () => {
    setTodos((todos) => todos.filter((_, i) => i !== index))
  }



  return (
    <>
      <form onSubmit={submitForm}>
        
        <input type='text' id='desc' value={todo.desc} placeholder="Description" onChange={inputChanged} />
        
        <input type='text' id='date' value={todo.date} placeholder="Date" onChange={inputChanged} />
        
        <input type='text' id='priority' value={todo.priority} placeholder="Priority" onChange={inputChanged} />
        <input type='submit' value='Submit' />
      </form> 
      <table id="todotable"><tbody>
      {
        todos.map((todo: any, index: any) => 
          <tr key={index}>
            <td>{todo.desc}</td>
            <td>{todo.date}</td>
            <td>{todo.priority}</td>
            <td><button onClick={deleteItem(index)}>Delete</button></td>
          </tr>)
        }
        </tbody></table> 
    </>
  );
}

export default Todolist;