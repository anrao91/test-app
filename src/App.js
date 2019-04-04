import React, { Component, Fragment } from "react";

import AddContactForm from "./components/AddContact";
import "./stylesheets/App.css";
import { ThemeContext, LocaleContext } from "./context/index";

class App extends Component {
	state = {
		contactList: [],
		showForm: false
	};
	_addContact = contact => {
		this.setState(prevState => {
			return {
				activeGroup: "work",
				contactList: [...prevState.contactList, contact]
			};
		});
	};

	_setActiveGroup = activeGroup => this.setState({ activeGroup });

	_setFormState = showForm => this.setState({ showForm });

	render() {
		return (
			<ThemeContext.Consumer>
				{({ theme }) => (
					<Fragment>
						<div className={`container ${theme.workTheme}`}>
							<div>
								<h1>React Hooks</h1>
								<div>
									<label>Active Group</label>
									<select
										value={this.state.activeGroup}
										id="ageRangeField"
										onChange={e =>
											this._setActiveGroup(e.target.value)
										}
									>
										<option value="work">Work</option>
										<option value="personal">
											Personal
										</option>
									</select>
								</div>
							</div>
							<ul>
								{this.state.contactList
									.filter(
										({ group }) =>
											this.state.activeGroup === group
									)
									.map(contact => (
										<li>
											{contact.name} [{contact.group}]
											<br />
											{contact.number}
										</li>
									))}
							</ul>
							{this.state.showForm && (
								<AddContactForm
									setActiveGroup={this._setActiveGroup}
									addContact={this._addContact}
									closeForm={() => this._setFormState(false)}
								/>
							)}
							{!this.state.showForm && (
								<button
									onClick={() => this._setFormState(true)}
								>
									Add Contact
								</button>
							)}
						</div>
						<LocaleContext.Consumer>
							{({ locale }) => (
								<div className="container">
									<blockquote
										className={`${theme.personalTheme}`}
									>
										<span>
											<strong>Locale: </strong>India(
											{locale.local})
										</span>
									</blockquote>
								</div>
							)}
						</LocaleContext.Consumer>
					</Fragment>
				)}
			</ThemeContext.Consumer>
		);
	}
}

export default App;
