import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodoList: React.FC = () => {

   const { todos, loading, error } = useTypedSelector(state => state.todo)

   return (
      <>{console.log(todos)}</>
   )
}

export default TodoList;