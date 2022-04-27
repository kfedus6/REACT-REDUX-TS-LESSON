import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const UserList: React.FC = () => {

   const { users, loading, error } = useTypedSelector(state => state.user)

   return (
      <>
         {console.log(users)}{console.log(loading)}{console.log(error)}
      </>
   )
}
