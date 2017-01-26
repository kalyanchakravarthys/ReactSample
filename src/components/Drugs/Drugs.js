import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as drugActions from '../../actions/drugActions';

class Drugs extends React.Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			drug: {name: '', description: ''}
		};

		this.onNameChange = this.onNameChange.bind(this);
		this.onDescriptionChange = this.onDescriptionChange.bind(this);
		this.onSaveData = this.onSaveData.bind(this);
	}

	onNameChange(e){
		const _drug = this.state.drug;
		_drug.name = e.target.value;
		this.setState({drug: _drug});
	}

	onDescriptionChange(e){
		const _drug = this.state.drug;
		_drug.description = e.target.value;
		this.setState({drug: _drug});
	}

	onSaveData(e){
		this.props.saveDrug(this.state.drug);
	}

	renderDrugsRow(drug, index){
		var descId = 'desc' + index;
		return <li><span key={index}>{drug.name}</span> ~ <span key={descId}>{drug.description}</span></li>;
	}

	render(){
		return (<section className="jumbotron">
					<h2>Drugs</h2>
						<ul>{this.props.drugs.map(this.renderDrugsRow)}</ul>
					<div className="form-group">
						<label>Drug Name:</label>
						<input		type="text"		onChange={this.onNameChange}	className="form-control"	value={this.state.drug.name}/>
					</div>
					<div className="form-group">
						<label>Description:</label>
						<input type="text" className="form-control" onChange={this.onDescriptionChange} value={this.state.drug.description}/>
					</div>
					<button className="btn btn-primary" onClick={this.onSaveData}>Save</button>
				</section>
				);
	}
}

Drugs.propTypes = {
	drugs: PropTypes.array.isRequired,
	saveDrug: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
	return{
		drugs: state.drugs
	};
}

function mapDispatchToProps(dispatch){
	return {
		saveDrug: drug => dispatch(drugActions.saveDrug(drug))
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Drugs);