import React, {useState} from 'react';
import Todolist from './todolist';


function Todotable(todos: any) {

  return (
    <>
    <table id="todotable"><tbody>
      {
        todos.map((todo: any, index: any) => 
          <tr key={index}>
            <td>{todo.desc}</td>
            <td>{todo.date}</td>
            <td>{todo.priority}</td>
          </tr>)
        }
        </tbody></table>   
    </>
  );
}

export default Todotable;