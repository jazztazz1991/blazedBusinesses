import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';

const Navbar = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const user = localStorage.getItem('user') || null;
		setUser(user);
	}, []);

	return (
		<div>
			<h1>Blaze Businesses</h1>
			<div className='navbar'>
				<Link to='/' className='p-3'>
					Home
				</Link>
				<Link to='/taxi' className='p-3'>
					Taxi
				</Link>
				<Link to='/login' className='p-3'>
					Login
				</Link>
				{user ? <AdminNav /> : null}
			</div>
		</div>
	);
};

export default Navbar;
