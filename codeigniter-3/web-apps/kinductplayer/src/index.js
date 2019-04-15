import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Players from './components/players';
import Upload from './components/upload';
import View from './components/view';
import Delete from './components/delete';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={Players} />
			<Route path='/upload' component={Upload} />
			<Route path='/view/:id' component={View} />
			<Route path='/delete/:id' component={Delete} />
		</div>
	</Router>,
document.getElementById('root'));

serviceWorker.register();
