import React from 'react';
import styled from 'styled-components';
// import { getAllUsers } from '../api/users';
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
export default function AllUsersPage({ userBank }) {
	// const [user, setAllUser] = useState('');

	// useEffect(() => {
	// 	const getAndSetAllUsers = async () => {
	// 		const { data } = await axios.get('http://localhost:5001/api/add');
	// 		console.log(data);
	// 		setAllUser(data.cash);
	// 		setMessage('');
	// 	};
	// 	if (AllUsersPage.all > 0) {
	// 		getAndSetAllUsers();
	// 	}
	// }, [user]);
	// console.log(userBank);
	const TableRender = () => {
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
						{userBank &&
							userBank.map((user) => {
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
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			{TableRender()}
		</div>
	);
}
