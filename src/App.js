import React from 'react';
import AddTodo from '../src/components/AddTodo';
import Lists from '../src/components/Lists';
import './App.css';
import Posts from './components/posts/Posts';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Posts/>
      <AddTodo/>
      <Lists/>
    </div>
  );
}

export default App;
