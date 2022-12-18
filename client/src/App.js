/** @format */

// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { usersApi } from './api/connecting';
import { Routes, Route } from 'react-router-dom';
import Navbar from './componnents/navbar';
import AddUserPage from './pages/addUser.pages';
import AllUsersPage from './pages/allUsers.pages';
import SearchUser from './pages/search.page';
import './App.css';

function App() {
	const [userBank, setUserBank] = useState([]);
	useEffect(() => {
		usersApi
			.get('/add')
			.then(({ data }) => {
				// console.log(data);
				setUserBank(data.users);
				// console.log(userBank);
			})
			.catch((e) => console.log(e));
	}, [userBank]);
	return (
		<div className='App'>
			{/* <header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
			</header> */}

			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<SearchUser />}
				/>
				<Route
					path='/add'
					element={<AddUserPage />}
				/>
				<Route
					path='/account'
					element={<AllUsersPage userBank={userBank} />}
				/>
				{/* <Route
					path='/Search'
					element={<SearchUser />}
				/> */}
				<Route
					path='/transfer'
					element={<AllUsersPage />}
				/>
			</Routes>

			{/* <h2>{userBank}</h2> */}
		</div>
	);
}

export default App;
