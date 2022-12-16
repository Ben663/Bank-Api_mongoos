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

const TableStyled = styled(Table)`
	&& {
		width: clamp(300px, 70vw, 1000px);
	}
`;
export default function AllUsersPage() {
	const [users, setAllUser] = useState([]);
	const [message, setMessage] = useState('');

	useEffect(() => {
		const getAndSetAllUsers = async () => {
			try {
				const users = await getAllUsers();
				setAllUser(users);
			} catch (error) {
				console.error(error.response.data.error || 'Error');
				setMessage(error.response.data.error || 'Error');
			}
		};
		getAndSetAllUsers();
	}, []);

	const TableRender = () => {
		if (!users) return;
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
						{users.map((user) => {
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
