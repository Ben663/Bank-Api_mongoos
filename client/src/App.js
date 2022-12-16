import logo from './logo.svg';
import {useState, useEffect} from 'react'
import { Api } from './api/connecting';
import './App.css';


function App() {
  const [userBank, setUserBank] = useState('Nothing');
  useEffect(() => {
    Api.get('/all').then(({ data }) => {
      setUserBank(data);
      console.log(data);
    }).catch(e=> console.log(e))
  },[])
  return (
		<div className='App'>
			<header className='App-header'>
				<img
					src={logo}
					className='App-logo'
					alt='logo'
				/>
				<h2>{userBank}</h2>
			</header>
		</div>
	);
}

export default App;
