import {useState} from "react";
import styled from "styled-components";
import './index.css'
import TodoInput from "./components/TotoInput";
import TodoHeader from "./components/TodoHeader";
import TodoButton from "./components/TodoButton";
import TodoList from "./components/TodoList";

function App() {
  const [ value, setValue ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ count, setCount ] = useState(0);

  const onChangeHandler = event => {
    setValue(event.target.value);
  }

  const onClickHandler = (event) => {  // 인자가 하나일떄는 () 를 생각해도돼
    const computedValue = value.trim();   // trim 공백을 없애줘
    if( computedValue === '' ) {
      alert('공백놉');
      return;
    }
    setTodos( prev => {   // prev 로 기존의 데이터를 가져와
      return [
        {
          uuid: count,
          text: value,
          isCompleted: false,
          isDeleted: false
        },
        ...prev,
      ]
    });
    setCount(prev => prev + 1);
    setValue('');
  }

  const onKeyPress = (e) => {
    if( e.key === 'Enter') {
      onClickHandler();
    }
  }

  const onCompleted = id => {
    const result = todos.map( todos => {
      return todos.uuid == id ? { ...todos, isCompleted: !todos.isCompleted} : { ...todos};
    })
    setTodos(result);
  }

  const onDeleted = id => {
    const result = todos.map( todos => {
      return todos.uuid == id ? { ...todos, isDeleted: !todos.isDeleted} : { ...todos};
    })
    setTodos(result);
  }

  return (
    <AppStyle className="App">
      <div className="wrapper">
        <div className="inner">
          <TodoHeader/>
          <div className="inpArea">
            <TodoInput value={value} onChangeHandler={onChangeHandler} onKeyPress={onKeyPress}/>
            <TodoButton disabled={value.trim() ===''} onClickHandler={onClickHandler}>추가하기</TodoButton>
          </div>
          <TodoList todos={todos} onCompleted={onCompleted} onDeleted={onDeleted}/>
        </div>
      </div>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #b1d1ce;
  
  .wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 768px;
    background-color: #fff;
    
    .inner {
      width: 354px;
      
      .inpArea {
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        height: 40px;
      }
    }
  }
`

export default App;
