import React, { Component } from "react";

export default class ImageAddForm extends Component {
	nameInput = React.createRef();
	numberInput = React.createRef();
	groupInput = React.createRef();

	handleSubmit = e => {
		e.preventDefault();
		const { current: nameInputDOM } = this.nameInput;
		const { current: numberInputDOM } = this.numberInput;
		const { current: groupInputDOM } = this.groupInput;
		const name = nameInputDOM.value;
		const number = numberInputDOM.value;
		const group = groupInputDOM.value;

		this.props.addContact({ name, number, group });
		this.props.closeForm();
		this.props.setActiveGroup(group);
	};
	render() {
		return (
			<div>
				<h3>Add Contact</h3>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Enter Name here"
						ref={this.nameInput}
					/>
					<input
						type="number"
						placeholder="Enter Contact Number here"
						ref={this.numberInput}
					/>

					<label>Select Group</label>
					<select id="ageRangeField" ref={this.groupInput}>
						<option value="work">Work</option>
						<option value="personal">Personal</option>
					</select>
					<div className="button-wrap">
						<button type="submit">Submit</button>
						<button
							onClick={this.props.closeForm}
							className="button button-outline"
						>
							Go Back
						</button>
					</div>
				</form>
			</div>
		);
	}
}
