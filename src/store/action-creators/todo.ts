import axios from "axios";
import { Dispatch } from "react";
import { TodoAction, TodoActionTypes } from "../../types/todo";

export const fetchTodos = () => async (dispatch: Dispatch<TodoAction>) => {
   try {
      dispatch({ type: TodoActionTypes.FETCH_TODOS })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCES, payload: response.data })
   } catch {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'error' })
   }
}