import styled from "styled-components";

const TodoLogout = ({logoutHandler}) => {
  return <Style>
    <button type="button" onClick={logoutHandler}>로그아웃</button>
  </Style>
}

const Style = styled.div`
  margin-top: 45px;
  text-align: center;
  
  button {
    padding: 0 2px;
    font-size: 15px;
    color: #777;
    background-color: transparent;
    border-bottom: 1px solid #777;
  }
`

export default TodoLogout