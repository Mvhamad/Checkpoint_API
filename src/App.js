import React from 'react';
import UserList from './UserList';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <article>
          <div>
            <header>
              <h1> Guest list </h1>
            </header>
            <div>
              <UserList />
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
