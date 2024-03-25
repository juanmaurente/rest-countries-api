import React from 'react';
import ThemeController from './ThemeController';

const NavBar = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='btn btn-ghost text-xl'>Where in the world?</a>
			</div>
			<div className='flex-none'>
				<ThemeController />
			</div>
		</div>
	);
};

export default NavBar;
