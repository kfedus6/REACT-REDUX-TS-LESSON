import { UserAction, UserActionTypes, userState } from "../../types/user";

const initialState: userState = {
   users: [],
   loading: false,
   error: null,
}

export const userReducer = (state = initialState, action: UserAction) => {
   switch (action.type) {
      case UserActionTypes.FETCH_USERS: {
         return { ...state }
      }
      case UserActionTypes.FETCH_USERS_SUCCES: {
         return { ...state, users: action.payload }
      }
      case UserActionTypes.FETCH_USERS_ERROR: {
         return { ...state, error: action.payload }
      }
      case UserActionTypes.FETCH_USER_REMOVE: {
         return { ...state, users: state.users.filter(u => u.id !== action.paylaod) }
      }
      default: {
         return state
      }
   }
}
