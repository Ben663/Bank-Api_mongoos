// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { usersApi } from './api/connecting';
import { Routes, Route } from 'react-router-dom';
import Navbar  from './componnents/navbar';
import AddUserPage from './pages/addUser.pages';
import AllUsersPage from './pages/allUsers.pages';
import SearchUser from './pages/search.page';
import './App.css';

function App() {
	const [userBank, setUserBank] = useState([]);
	useEffect(() => {
		usersApi
			.get('/all')
			.then(({ data }) => {
				setUserBank(data);
				// console.log(data);
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
			{/* <h2>{userBank}</h2> */}
			
				<Navbar />
				<Routes>
					<Route path="/" element={<SearchUser />} />
					<Route path='/transfer' />
					<Route
						path='/allusers'
						element={<AllUsersPage />}
					/>
					<Route
						path='/add'
						element={<AddUserPage />}
					/>
				</Routes>
			
		</div>
	);
}

export default App;
