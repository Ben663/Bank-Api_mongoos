import React from 'react';
import { addUser } from '../api/users';
import {PageStyled} from './pagesStyled/style';


export default function AddUserPage() {
	const addUserHandler = async (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const values = Object.fromEntries(data.entries);
		console.log(values);
		try {
			const res = await addUser(values);
			console.log(res);
		} catch (error) {
			console.error(error.response.data.error || 'Error');
		}
	};
	return (
		<PageStyled>
			<div className='header'>Add Account</div>
			<form
				// action=''
                // onSubmit={addUserHandler}
            >
				<input
					name='cash'
					type='number'
					placeholder='Cash $'
				/>
				<input
					name='credit'
					type='number'
					placeholder='Credit $'
				/>
				<button onChange={addUserHandler}>Add User To Account</button>
			</form>
		</PageStyled>
	);
}
