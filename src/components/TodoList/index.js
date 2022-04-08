import styled from "styled-components";
import TodoItem from "../TodoItem";

const TodoList = ({todos, onCompleted, onDeleted}) => {
  return <Style>
    {
      todos.map((todo) => {
        return (
            <TodoItem todo={todo} key={todo._id} onCompleted={onCompleted} onDeleted={onDeleted}/>
        )
      })
    }
  </Style>
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export default TodoList;