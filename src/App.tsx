import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';
import { useTypedSelector } from './hooks/useTypedSelector';
import './styles/app.css'

const App = () => {

   const { loading } = useTypedSelector(state => state.user);

   return (
      <div className="app">
         {loading ? <h1>Идет загрузка...</h1> : <UserList />}
         <TodoList />
      </div>
   )
}

export default App;
