import { TodoAction, TodoActionTypes, todoState } from "../../types/todo";

const initialState: todoState = {
   todos: [],
   loading: false,
   error: null,
}

export const todoReducer = (state = initialState, action: TodoAction) => {
   switch (action.type) {
      case TodoActionTypes.FETCH_TODOS: {
         return state
      }
      case TodoActionTypes.FETCH_TODOS_SUCCES: {
         return state
      }
      case TodoActionTypes.FETCH_TODOS_ERROR: {
         return state
      }
      default: {
         return state
      }
   }
}