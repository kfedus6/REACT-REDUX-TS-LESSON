interface todoState {
   todos: any[];
   loader: boolean;
   error: null | string;
}

enum TodoActionTypes {
   FETCH_TODOS = 'FETCH_TODOS',
   FETCH_TODOS_SUCCES = 'FETCH_TODOS_SUCCES',
   FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
}

interface FetchTodoAction {
   type: TodoActionTypes.FETCH_TODOS
}

interface FetchTodoSuccesAction {
   type: TodoActionTypes.FETCH_TODOS_SUCCES,
   payload: any[]
}

interface FetchTodoErrorAction {
   type: TodoActionTypes.FETCH_TODOS_ERROR,
   payload: null | string
}

type TodoAction = FetchTodoAction | FetchTodoSuccesAction | FetchTodoErrorAction;

const initialState: todoState = {
   todos: [],
   loader: false,
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