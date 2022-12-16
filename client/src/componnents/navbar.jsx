import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const NavbarStyled = styled.div`
	background-color: #b7b7e6;
	padding: 1rem;
	display: flex;
	justify-content: space-around;
	.Link {
		color: black;
		padding: 0.5rem;
		border: 1px solid black;
		text-decoration: none;
	}
`;
export default function Navbar() {
    return (
			<NavbarStyled>
				<Link
					className='Link'
					to='/'>
					Search User
				</Link>
				<Link
					className='Link'
					to='/add'>
					Add User
				</Link>
				<Link
					className='Link'
					to='/Transfer'>
					Transfer
            </Link>
            <Link className="Link" to='all'>All Users</Link>
			</NavbarStyled>
		);
};