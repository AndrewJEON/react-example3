import React,  { useState } from 'react';
import Card from '../UI/Card';

import Button from '../UI/Button';
import styles from './AddUser.module.css';

import ErrorModel from '../UI/ErrorModel';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();


  const addUserHandler = (event) => {
    event.preventDefault();

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
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
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
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor='age'>Age ( Years )</label>
					<input
						id='age'
						type='number'
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</Wrapper>
	);
};


export default AddUser;
