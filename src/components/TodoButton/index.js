import styled from "styled-components";

const TodoButton = ({disabled, onClickHandler, children}) => {
  return <ButtonStyle type="button" className="btnSubmit" disabled={disabled} onClick={onClickHandler}>{ children }</ButtonStyle>
}

const ButtonStyle = styled.button`
  width: 116px;
  color: #fff;
  background-color: ${({disabled}) => disabled ? 'rgba(0,0,0,0.08)' : '#426EFF'};
  cursor: pointer;
`

export default TodoButton;