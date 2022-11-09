import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const adduserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]; 
    });
  };

  return (
		<div>
			<AddUser onAddUser={adduserHandler} />
			<UserList users={usersList} />
		</div>
	);
}

export default App;
