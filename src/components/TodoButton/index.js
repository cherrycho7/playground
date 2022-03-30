import styled from "styled-components";

const TodoButton = ({disabled, onClickHandler, children}) => {
  return <ButtonStyle type="button" className="btnSubmit" disabled={disabled} onClick={onClickHandler}>{ children }</ButtonStyle>

}

const ButtonStyle = styled.button`
  width: 116px;
  color: #fff;
  background-color: #426EFF;
  cursor: pointer;
  
  &:disabled {
    background-color: rgba(0,0,0,0.08);
  }
`

export default TodoButton;