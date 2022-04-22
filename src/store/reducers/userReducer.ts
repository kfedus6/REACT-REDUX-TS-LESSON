
interface userState {
   users: any[];
   loading: boolean;
   error: null | string
}

enum UserActionTypes {
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

type UserAction = FetchUserAction | FetchUserSuccesAction | FetchUserErrorAction

const initialState: userState = {
   users: [],
   loading: false,
   error: null,
}

export const userReducer = (state = initialState, action: UserAction) => {
   switch (action.type) {
      case UserActionTypes.FETCH_USERS:
         return state
      case UserActionTypes.FETCH_USERS_SUCCES:
         return state
      case UserActionTypes.FETCH_USERS_ERROR:
         return state
      default:
         return state
   }
}
