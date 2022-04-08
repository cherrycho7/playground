import styled from "styled-components";

const TodoInput = ({value, onChangeHandler, onKeyPress, placeholder}) => {
  return <Style>
    <input type="text" value={value} onChange={onChangeHandler} onKeyPress={onKeyPress} placeholder={placeholder}/>
  </Style>
}

const Style = styled.div`
  width: 230px;
  
  input {
    padding: 11px 13px;
    width: 100%;
    height: 100%;
    font-size: 16px;
    color: #000;
    background-color: rgba(0,0,0,0.03);
    
    &::placeholder {
      color: rgba(0,0,0,0.4);
    }
  }
`

export default TodoInput;