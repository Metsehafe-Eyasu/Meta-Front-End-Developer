import { useState } from "react";

const ToDo = (props) => {
  return (
    <tr>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input type="text" />
      </td>
      <td>
        <label>{props.createdAt}</label>
      </td>
    </tr>
  );
};

const ToDoList = () => {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createdAt: "18:00",
    },
    {
      id: "todo2",
      createdAt: "20:30",
    },
  ]);

  const reverse = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <button onClick={reverse}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <ToDo id={todo.id} key={todo.id} createdAt={todo.createdAt} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
