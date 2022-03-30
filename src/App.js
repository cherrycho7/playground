import {useState} from "react";
import styled from "styled-components";
import './index.css'
import TodoInput from "./components/TotoInput";
import TodoHeader from "./components/TodoHeader";
import TodoButton from "./components/TodoButton";
import TodoList from "./components/TodoList";

const colorBlue = 'blue';

function App() {
  const [ value, setValue ] = useState('');
  const [ btn, setBtn ] = useState(true);
  const [ todos, setTodos ] = useState([
    {
      uuid: 0,
      text: '해야할 일 01',
      isCompleted: true,
      isDeleted: false
    },
    {
      uuid: 1,
      text: '할야할 일 02',
      isCompleted: false,
      isDeleted: true
    }
  ]);

  const [ count, setCount ] = useState(2);

  const onChangeHandler = event => {
    console.log(event.target.value);
    setValue(event.target.value);

    if( event.target.value !== '' ) {
      setBtn(false);
    } else {
      setBtn(true);
    }
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

  return (
    <AppStyle className="App">
      <div className="wrapper">
        <div className="inner">
          <TodoHeader/>
          <div className="inpArea">
            <TodoInput value={value} onChangeHandler={onChangeHandler} onKeyPress={onKeyPress}/>
            <TodoButton disabled={btn} onClickHandler={onClickHandler}>추가하기</TodoButton>
          </div>
          <TodoList todos={todos}/>
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
