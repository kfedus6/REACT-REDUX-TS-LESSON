export interface todoState {
   todos: any[];
   loading: boolean;
   error: null | string;
}

export enum TodoActionTypes {
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

export type TodoAction = FetchTodoAction | FetchTodoSuccesAction | FetchTodoErrorAction;
