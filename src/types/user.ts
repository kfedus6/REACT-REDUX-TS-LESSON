export interface userState {
   users: any[];
   loading: boolean;
   error: null | string
}

export enum UserActionTypes {
   FETCH_USERS = 'FETCH_USERS',
   FETCH_USERS_SUCCES = 'FETCH_USERS_SUCCES',
   FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}


interface FetchUserAction {
   type: UserActionTypes.FETCH_USERS
}

interface FetchUserSuccesAction {
   type: UserActionTypes.FETCH_USERS_SUCCES,
   payload: any[]
}

interface FetchUserErrorAction {
   type: UserActionTypes.FETCH_USERS_ERROR,
   payload: null | string
}

export type UserAction = FetchUserAction | FetchUserSuccesAction | FetchUserErrorAction
