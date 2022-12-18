// import { addUser } from '../api/users';

import React, { useState } from 'react';
import { usersApi } from '../api/connecting';
import { PageStyled } from './pagesStyled/style';

export default function AddUserPage() {
	const [cashInp, setCashInp] = useState('');
	const [creditInp, setCreditInp] = useState('');
	// const addUserHandler = async (e) => {
	// 	e.preventDefault();
	// 	const data = new FormData(e.currentTarget);
	// 	const values = Object.fromEntries(data.entries);
	// 	console.log(values);
	// 	try {
	// 		const res = await addUser(values);
	// 		console.log(res);
	// 	} catch (error) {
	// 		console.error(error.response.data.error || 'Error');
	// 	}
	// };
	const addUserHandler = async (e) => {
		await usersApi.post('/add', {
			cash: cashInp,
			credit: creditInp,
			
		});
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
					value={cashInp}
					onChange={(e) => setCashInp(e.target.value)}
				/>
				<input
					name='credit'
					type='number'
					placeholder='Credit $'
					value={creditInp}
					onChange={(e) => setCreditInp(e.target.value)}
				/>
				<button onClick={addUserHandler}>Add User To Account</button>
			</form>
		</PageStyled>
	);
}
