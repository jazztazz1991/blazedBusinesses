import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Taxi from './pages/taxi.jsx';
import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import Login from './pages/login.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <h1 className='display-2'>Wrong page!</h1>,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'taxi',
				element: <Taxi />,
			},
			{
				path: 'dashboard',
				element: <Dashboard />,
			},
			{
				path: 'login',
				element: <Login />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
