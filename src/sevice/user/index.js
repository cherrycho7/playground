import axios from "axios";
import {getToken, setToken} from "../../utils";

const user = {
  // signup: async (params) => { // async 비동기함수다!
  signup: async ({ name, email, password, age }) => {
    const result = await axios.post('https://api-nodejs-todolist.herokuapp.com/user/register', {  // get, post, put, delete, fetch
      name,
      email,
      password,
      age   // age: age, 이런식인데 이름이 같아서 생략가능
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    setToken(result.data.token)
    return result;
  },

  login: async ({ email, password }) => {
    try {
      const result = await axios.post('https://api-nodejs-todolist.herokuapp.com/user/login', {
        email, password
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setToken(result.data.token)
      return result;
    } catch (e) {
      alert('아이디, 비밀번호를 확인해주세요');
      console.log(e);
    }
  },

  logout: async () => {
    const result = await axios.post('https://api-nodejs-todolist.herokuapp.com/user/logout', {}, {
      headers: {
        Authorization: getToken()
      }
    })
    return result;
  },

  autoLogin: async () => {
    const result = await axios.get('https://api-nodejs-todolist.herokuapp.com/user/me', {
      headers: {
        Authorization: getToken()
      }
    })
    return result;
  }
}

export default user;