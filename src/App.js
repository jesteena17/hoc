import React from 'react';

import UserProfile from './components/user-profile/user-profile.component';
import UserList from './components/user-list/user-list.component';

import './App.styles.scss';

function App() {
  return (
    <div className='App'>
      <UserList dataSource='https://jsonplaceholder.typicode.com/users' />
      <UserProfile
        name='jes'
        email='jes@gmail.com'
        dataSource='https://jsonplaceholder.typicode.com/posts'
      />
    </div>
  );
}

export default App;
