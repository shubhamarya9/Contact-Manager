import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
class Contacts extends Component {
  deleteIt = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span>
                List
              </h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteContactHandler={this.deleteIt.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
