import { UserAction, UserActionTypes, userState } from "../../types/user";

const initialState: userState = {
   users: [],
   loading: false,
   error: null,
}

export const userReducer = (state = initialState, action: UserAction) => {
   switch (action.type) {
      case UserActionTypes.FETCH_USERS: {
         return { ...state, loading: true }
      }
      case UserActionTypes.FETCH_USERS_SUCCES: {
         return { ...state, posts: action.payload }
      }
      case UserActionTypes.FETCH_USERS_ERROR: {
         return { ...state, error: action.payload }
      }
      default: {
         return state
      }
   }
}
