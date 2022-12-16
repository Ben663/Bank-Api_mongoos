import React, { useState } from "react";

export function SearchForm({ callback }) {
    const [search, setSearch] = useState('');

    const getHandler = (e) => {
        if (e.type === 'Keydown' && e.code !== 'Enter') return
        callback(search)
        setSearch('');
    }
    return (
			<div>
				<div className='form'>
					<input
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type='text'
						onKeyDown={getHandler}
					/>
					<button onClick={getHandler}>Get User</button>
				</div>
			</div>
		);
}