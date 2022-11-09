import React,  { useState, useRef} from 'react';
import Card from '../UI/Card';

import Button from '../UI/Button';
import styles from './AddUser.module.css';

import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age ( one-empty values )'
      });
      return;
    }

    if (+enteredAge < 1) { // + 붙이면 숫자형으로 강제 Casting 한다.
      setError({
				title: 'Invalid Age',
				message: 'Please enter a valid Age ( > 0 )',
			});
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    console.log(enteredUsername, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };


  const errorHandler = () => {
    setError(null);
  }

  return (
		<Wrapper>
			{error && (
				<ErrorModel
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						ref={nameInputRef}
					/>
					<label htmlFor='age'>Age ( Years )</label>
					<input
						id='age'
						type='number'
						ref={ageInputRef}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};


export default AddUser;
