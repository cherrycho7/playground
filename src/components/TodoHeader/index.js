import React from "react";
import styled from "styled-components";

const TodoHeader = () => {
  return <Style>
    <h1>
      Todo list
    </h1>
  </Style>
}


const Style = styled.div`
  padding: 48px;
  font-size: 24px;
  text-align: center;
`

export default TodoHeader;