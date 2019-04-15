import React from 'react';
import { Link } from 'react-router-dom';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {player: {}};
}
  
  componentDidMount() {
	fetch('http://codeigniter-3.local/index.php/playercontroller/player?id=' + this.props.match.params.id)
		.then(response => {
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
		<div className='container'>
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
			<div className='container mt-4'>
				<p className='h2'>{this.state.player.name}</p>
				<div className='table-responsive'>
				  <table className="table table-striped table-hover">
				  	<tbody>
						<tr><th>Age:</th><td >{this.state.player.age}</td></tr>
						<tr><th>City:</th><td >{this.state.player.city}</td></tr>
						<tr><th>Province:</th><td >{this.state.player.province}</td></tr>
						<tr><th>Country:</th><td >{this.state.player.country}</td></tr>
					</tbody>
					</table>
				</div>
				<Link className="btn btn-primary" to={`/delete/${this.props.match.params.id}`}>Delete</Link>	 
		   </div>
	  </div>
    );
  }
}

export default View;