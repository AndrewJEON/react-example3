import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';
import UseEffect from './Components/UI/UseEffect';
import UseRef from './Components/UI/UseRef';

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
			<p />
			<UseEffect />
			<p />
			<UseRef />
		</React.Fragment>
	);
}

export default App;
