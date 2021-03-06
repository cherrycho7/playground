import {useEffect, useState} from "react";
import styled from "styled-components";
import service from "./sevice";
import './index.css'
import TodoInput from "./components/TodoInput";
import TodoHeader from "./components/TodoHeader";
import TodoButton from "./components/TodoButton";
import TodoList from "./components/TodoList";
import TodoLogout from "./components/TodoLogout";

function App() {
  const [ value, setValue ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ age, setAge ] = useState('');

  const [ email2, setEmail2 ] = useState('');
  const [ password2, setPassword2 ] = useState('');

  const [ user, setUser ] = useState(null);
  const isLogin = user ? true : false;

  const onChangeHandler = event => {
    setValue(event.target.value);
  }

  // const onClickHandler = (event) => {  // 인자가 하나일떄는 () 를 생각해도돼
  //   const computedValue = value.trim();   // trim 공백을 없애줘
  //   if( computedValue === '' ) {
  //     alert('공백놉');
  //     return;
  //   }
  //   setTodos( prev => {   // prev 로 기존의 데이터를 가져와
  //     return [
  //       {
  //         uuid: count,
  //         text: value,
  //         isCompleted: false,
  //         isDeleted: false
  //       },
  //       ...prev,
  //     ]
  //   });
  //   setCount(prev => prev + 1);
  //   setValue('');
  // }

  const onClickHandler = async () => {
    const result = await service.task.addTask(value)
    console.log(result)

    setTodos( prev => [
        ...prev,
      { ...result.data }
    ]);
    setValue('');
  }

  const onKeyPress = (e) => {
    if( e.key === 'Enter') {
      onClickHandler();
    }
  }

  const onCompleted = id => {
    service.task.completeTask({id, completed: !todos.completed})
    const result = todos.map( todos => {
      return todos._id == id ? { ...todos, completed: !todos.completed} : { ...todos};
    })
    setTodos(result);
  }

  const onDeleted = id => {
    service.task.deleteTask({id})
    const result = todos.filter(todo => todo._id != id);
    setTodos(result);
    console.log('deleted')
  }

  const signupHandler = async () => {
    const result = await service.user.signup({ name, email, password, age })
    console.log('signupHandler : ', result)
  }

  const loginHandler = async () => {
    const result = await service.user.login({email: email2, password: password2})
    setUser(result)
    console.log('loginHandler :', result)
  }

  const logoutHandler = async () => {
    const result = await service.user.logout()
    setUser(null);
    console.log('logoutHandler : ', result);
  }

  const fetchAllTasks = async () => {
    const tasks = await service.task.fetchAllTasks()
    setTodos(tasks.data)
    console.log(tasks)
  }

  const getLoginUser = async () => {
    try {
      const result = await service.user.autoLogin()
      result ? setUser(result) : setUser(null);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getLoginUser();

    if (isLogin) {
      fetchAllTasks();
    }
  }, [isLogin])  // useEffect 첫번쨰로 함수, 두번쨰로 배열을 받아 / useEffect 에서는 async, await를 쓸수가 없어

  return (
    <AppStyle className="App">
      <div className="test" onClick={getLoginUser}>get login user info</div>
      {
        isLogin ? <div className="wrapper">
              <div className="inner">

                <TodoHeader/>
                <div className="inpArea">
                  <TodoInput value={value} onChangeHandler={onChangeHandler} onKeyPress={onKeyPress}/>
                  <TodoButton disabled={value.trim() ===''} onClickHandler={onClickHandler}>추가하기</TodoButton>
                </div>
                <TodoList todos={todos} onCompleted={onCompleted} onDeleted={onDeleted}/>
                <TodoLogout logoutHandler={logoutHandler}/>
              </div>
            </div> : <div className="signup inner">
          <div className="join">
            <TodoInput value={name}
                       onChangeHandler={e => {setName(e.target.value)}}
                       placeholder="ID"
            />
            <TodoInput value={email}
                       onChangeHandler={e => {setEmail(e.target.value)}}
                       placeholder="Email"
                       type="email"
            />
            <TodoInput value={password}
                       onChangeHandler={e => {setPassword(e.target.value)}}
                       placeholder="Password"
            />
            <TodoInput value={age}
                       onChangeHandler={e => {setAge(e.target.value)}}
                       placeholder="Age"
            />
            <TodoButton onClickHandler={signupHandler}>회원가입</TodoButton>
          </div>
          <div className="login">
            <TodoInput value={email2}
                       onChangeHandler={e => {setEmail2(e.target.value)}}
                       placeholder="emil@google.com"
                       tyep="email"
            />
            <TodoInput value={password2}
                       onChangeHandler={e => {setPassword2(e.target.value)}}
                       type="password"
                       placeholder="Password"
            />
            <TodoButton onClickHandler={loginHandler}>로그인</TodoButton>
          </div>
        </div>
      }

    </AppStyle>
  );
}

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  
  button {
    cursor: pointer;
  }
  
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

  .signup {
    margin: 20px 0;
    
    input {
      margin-top: 5px;
    }
    button {
      margin: 10px 0 30px;
      width: 100%;
      height: 35px;
    }
  }
`

export default App;
