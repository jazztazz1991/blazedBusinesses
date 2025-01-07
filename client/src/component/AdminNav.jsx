import { Link } from 'react-router-dom';

const AdminNav = () => {
	return (
		<>
			<Link to='/dashboard'>Dashboard</Link>
			<Link to='/logout'>Logout</Link>
		</>
	);
};

export default AdminNav;
