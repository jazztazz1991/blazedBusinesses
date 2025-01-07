import { useState } from 'react';
import instance from '../hooks/API';

const Taxi = () => {
	const [submission, setSubmission] = useState({
		start: '',
		end: '',
		day: '',
		time: '',
		driver: '',
	});
	// const [submitted, setSumbitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await instance.post('/api/taxi/addSession', submission);
		console.log(response);
		const data = await response.json();
		console.log(data);
		// setSumbitted(true);
	};

	return (
		<div className='taxi'>
			<h1 className='taxiTitle'>Taxi Driver Session Submission</h1>

			<form className='taxiForm'>
				<label>
					Start Time:
					<input
						type='time'
						name='start'
						onChange={(e) =>
							setSubmission({ ...submission, start: e.target.value })
						}
					/>
				</label>
				<br />
				<label>
					End Time:
					<input
						type='time'
						name='end'
						onChange={(e) =>
							setSubmission({ ...submission, end: e.target.value })
						}
					/>
				</label>
				<br />
				<label>
					Day:
					<input
						type='date'
						name='day'
						onChange={(e) =>
							setSubmission({ ...submission, day: e.target.value })
						}
					/>
				</label>
				<br />
				<label>
					Hours Worked:
					<input
						type='number'
						name='time'
						onChange={(e) =>
							setSubmission({ ...submission, time: e.target.value })
						}
					/>
				</label>
				<br />
				<label>
					Driver:
					<select
						id='drivers'
						name='drivers'
						onChange={(e) =>
							setSubmission({ ...submission, driver: e.target.value })
						}
					>
						<option value=''>Select a driver</option>
						<option value='Fluffy'>Fluffy (Lead Taxi)</option>
						<option value='Grant96'>Grant96</option>
						<option value='Rambo'>Rambo</option>
						<option value='Mocha'>Mocha</option>
					</select>
				</label>
				<br />
				<button type='submit' className='submitBtn' onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Taxi;
