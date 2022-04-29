import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionTypes } from "../../types/user"

export const fetchUsers = () => {
   return async (dispatch: Dispatch<UserAction>) => {
      try {
         dispatch({ type: UserActionTypes.FETCH_USERS })
         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
         dispatch({ type: UserActionTypes.FETCH_USERS_SUCCES, payload: response.data })
      } catch {
         dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'error' })
      }
   }
}

export const fetchRemoveUsers = (id: number) => {
   return async (dispatch: Dispatch<UserAction>) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
         method: 'DELETE',
      })
      dispatch({ type: UserActionTypes.FETCH_USER_REMOVE, paylaod: id })
   }
}