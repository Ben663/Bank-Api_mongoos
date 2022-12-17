import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllUsers } from '../api/users';
import {
	Table,
	TableCell,
	TableRow,
	TableBody,
	TableHead,
} from '@mui/material';
import axios from 'axios';

const TableStyled = styled(Table)`
	&& {
		width: clamp(300px, 70vw, 1000px);
	}
`;
export default function AllUsersPage() {
	const [user, setAllUser] = useState('');
	const [message, setMessage] = useState('');

	useEffect(() => {
		const getAndSetAllUsers = async () => {
			const { data } = await axios.get(
				`https://bankapi-e8gp.onrender.com/api/all/${getAllUsers.all[0]}`
			);
			setAllUser(data.cash);
			setMessage('')

		};
		if (AllUsersPage.all.length > 0) {
			getAndSetAllUsers();
			
		}
	}, [user]);

	const TableRender = () => {
		if (!user) return;
		return (
			<div>
				<TableStyled>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Cash</TableCell>
							<TableCell>Credit</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{user.map((user) => {
							return (
								<TableRow key={user._id}>
									<TableCell>{user._id}</TableCell>
									<TableCell align='left'>{user.cash}</TableCell>
									<TableCell align='left'>{user.credit}</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</TableStyled>
			</div>
		);
    };
    return (<div style={{ display: "flex", justifyContent: "center" }}>
        {message && <div>{message}</div>}
        {TableRender()}
    </div>
    );
};
