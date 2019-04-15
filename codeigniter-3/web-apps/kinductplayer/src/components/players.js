import React from 'react';
import { Link } from 'react-router-dom';

class Players extends React.Component {
	constructor(props) {
		super(props);
		this.state = {players: []};
		this.headers = [
			{ key: 'name', label: 'NAME' },
			{ key: 'age', label: 'AGE' },
			{ key: 'city', label: 'CITY' },
			{ key: 'province', label: 'PROVINCE' },
			{ key: 'country', label: 'COUNTRY' }
		];
	}
	
	componentDidMount() {
		fetch('http://codeigniter-3.local/index.php/playercontroller/players')
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					players:result
				});
			});
	}

	render() {
		return (
			<div className='container'>
				<div className="container mt-4">
					<ul className="nav nav-pills nav-fill nav-justified">
						<li className="nav-item">
						  	<Link className="nav-link active" to="/">Athletes</Link>
						</li>
						<li className="nav-item">
						    <Link className="nav-link" to="/upload">Upload</Link>
						</li>
					</ul>
				</div>
				<div className="container mt-4">
					<p className='h2'>Athletes</p>
					<div className='table-responsive'>
						<table className='table table-striped table-hover'>
							<thead>
								<tr>
								{
									this.headers.map(function(h) {
										return (
											<th key = {h.key}>{h.label}</th>
										)
									})
								}
								  <th scope="col">ACTIONS</th>
								</tr>
							</thead>
							<tbody>
								{
									this.state.players.map(function(item, key) {
									return (
										<tr key = {key}>
										  <td>{item.name}</td>
										  <td>{item.age}</td>
										  <td>{item.city}</td>
										  <td>{item.province}</td>
										  <td>{item.country}</td>
										  <td>
											<Link className="badge badge-primary" to={`/view/${item.id}`}>View</Link>	
											<Link className="badge badge-primary ml-3" to={`/delete/${item.id}`}>Delete</Link>	 
										  </td>
										</tr>
										)
									})
								}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default Players;