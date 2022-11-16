import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
import UseEffect from './Components/UI/UseEffectTest';

function App() {

  const [usersList, setUsersList] = useState([]);

  const adduserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]; 
    });
  };

  return (
		<React.Fragment>
			<AddUser onAddUser={adduserHandler} />
      <UserList users={usersList} />
      <UseEffect />
		</React.Fragment>
	);
}

export default App;
