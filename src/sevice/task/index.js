import axios from "axios";
import {getToken} from "../../utils";

const task = {
  fetchAllTasks: async () => {  // get 함수에는 body를 못보내게 되어있엉
    const result = await axios.get('https://api-nodejs-todolist.herokuapp.com/task',{
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken()
      }
    })
    return result.data
  },
  addTask: async (todo) => {
    const result = await axios.post('https://api-nodejs-todolist.herokuapp.com/task', {
      description: todo
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken()
      }
    })
    return result.data
  },
  completeTask: async ({ id, completed}) => {
    const result = await axios.put(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
      completed: completed
    }, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken()
      }
    })
    return result.data
  },
  deleteTask: async  ({ id }) => {
    const result = await axios.delete(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken()
      }
    })
    return result.data
  }
}

export default task;