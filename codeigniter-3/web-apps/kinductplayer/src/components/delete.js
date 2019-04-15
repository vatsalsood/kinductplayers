import React from 'react';
import { Link } from 'react-router-dom';

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {player: {}};

  }
componentDidMount() {
	fetch('http://codeigniter-3.local/index.php/playercontroller/player/' + this.props.match.params.id,{
		method: 'DELETE'
	}).then(response => {
			return response.json();
		}).then(result => {
			console.log(result);
			this.setState({
				player:result
			});
		});
	}
	render() {
		return (
			<div className="container">
				<div className="container mt-4">
					<ul className="nav nav-pills nav-fill nav-justified">
						<li className="nav-item">
						  	<Link className="nav-link" to="/">Athletes</Link>
						</li>
						<li className="nav-item">
						    <Link className="nav-link" to="/upload">Upload</Link>
						</li>
					</ul>
				</div>
				<div className="container mt-4">
					<p className='h2'>The athlete was deleted!</p>
				</div>
			</div>
		);
	}
}

export default Delete;