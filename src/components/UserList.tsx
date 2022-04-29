import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useAction } from '../hooks/useAction';

const UserList: React.FC = () => {

   const { users } = useTypedSelector(state => state.user)

   const { fetchUsers, fetchRemoveUsers } = useAction();

   useEffect(() => {
      fetchUsers()
   }, [])

   const deleteUser = (id: number) => {
      fetchRemoveUsers(id);
   }

   return (
      <div>
         {users.map(item => {
            return <div key={item.id} className="user">
               <div className='user__content'>
                  <strong>{item.id}. {item.name}</strong>
                  <div>
                     {item.email}
                  </div>
               </div>
               <div className='user__btn'>
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
               </div>
            </div>
         })}
      </div>
   )
}

export default UserList;