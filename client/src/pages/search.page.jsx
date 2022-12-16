import React, { useState } from 'react';
import {PageStyled} from './pagesStyled/style';
import { getUserById, deleteUser } from '../api/users';
import { UserCard } from '../componnents/userCard';
import {SearchForm} from '../componnents/searchForm'


export default function SearchUser() {
	const [user, setUser] = useState(null);
	const [message, setMessage] = useState('');

	const getUser = async (id) => {
		if (!id) return;
		try {
			const { user } = await getUserById(id);
			setMessage('');
			setUser(user);
		} catch (error) {
			setUser(null);
			console.error(error.response.data.error || 'Error');
			setMessage(error.response.data.error || 'Error');
		}
	};
	const deleteHandler = async () => {
		try {
			const res = await deleteUser(user._id);
			setUser(null);
			setMessage(res.message);
		} catch (error) {
			setMessage('faild');
			console.error(error.response.data.error || 'Error');
		}
	};
	const newUser = () => {
		if (!user) return;
		return (
			<>
				<UserCard user={user} />
				<button onClick={deleteHandler}>Deleted User</button>
			</>
		);
    };
    return (
			<PageStyled>
				<div className='header'>Search User</div>
				<SearchForm callback={getUser} />
				{message && <div>{message}</div>}
				{newUser()}
			</PageStyled>
		);
};
