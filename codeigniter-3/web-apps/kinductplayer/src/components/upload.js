import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'; 
import 'bootstrap';


class Upload extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {player:{}}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(e) {
	this.setState({player:e.target.files[0]})
    var x =  document.getElementById('fileToUpload').value;
 	var n = x.lastIndexOf("\\");
	var result = x.substring(n + 1);
	document.getElementById('inputFile').value = result;
 }

handleSubmit(e){
    e.preventDefault() // Stop form submit     
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
      alert('The File APIs are not fully supported in this browser.');
      return;
    }   

   var input = document.getElementById('fileToUpload');
    if (!input) {
      alert("Um, couldn't find the fileToUpload element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");               
    }
    else {
      var file = this.state.player;
      var fr = new FileReader();
      var text;
      fr.onload = function(e) {
		text = fr.result;
		var filecontent = JSON.parse(text);

	  fetch("http://codeigniter-3.local/index.php/playercontroller/player_upload", {
			method: 'POST',
			body: JSON.stringify({"data":filecontent}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => response.json().then(data=>{
			console.log(data);
			if(data.status === 'success'){
				$('.success').modal('show');
			}else{
				$('.fail').modal('show');
			}
		}))
	}

	fr.readAsText(file);

	}
}
handleClick(){
	document.getElementById('fileToUpload').click();
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
					    <Link className="nav-link active" to="/upload">Upload</Link>
					</li>
				</ul>
			</div>
			<div className="container mt-4">
				<div className='row'>
					<div className='col'>
						<p className='h2'>Upload Athletes</p>
						<form className='mt-4' onSubmit={this.handleSubmit}>
							<div className='input-group mb-3'>
							  <div className="custom-file">
							    	<input type="text" className='form-control' id="inputFile" placeholder="Upload file"/>
							  		<input type="file" id="fileToUpload" className="d-none" onChange={this.handleChange} />
									<input type="button" className="btn btn-primary" value="Browse..." onClick={this.handleClick} />
							  </div>
							</div>
							<div className='form-group'>
								<input className="btn btn-primary" type="submit" value="Submit" />
							</div>
						 </form>
					 </div>
				 </div>
			</div>
			<div className="modal success hide fade" tabIndex="-1" role="dialog">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title">Success!!</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
			        <p>Athletes uploaded successfully!</p>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>
			<div className="modal fail hide fade" tabIndex="-1" role="dialog">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title">Err!!</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
			        <p>There was an error uploading the athletes!!</p>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
    );
  }
}

export default Upload;