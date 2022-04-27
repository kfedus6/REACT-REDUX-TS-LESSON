import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const TodoList: React.FC = () => {

   const { todos, loading, error } = useTypedSelector(state => state.todo)

   return (
      <>{console.log(todos)}{console.log(loading)}{console.log(error)}</>
   )
}
