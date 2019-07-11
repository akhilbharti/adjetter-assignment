import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "../action/contactAction";
import { Link } from "react-router-dom";
import "../App.css";
class MainSearchBarPage extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", details: [] };
  }
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = e => {
    // e.preventDefault();
    let contact = {
      query: this.state.query
    };
    this.props.createContact(contact);
  };

  deleteContact = (e, index) => {
    e.preventDefault();
    this.setState({ repoUser: [] });
    this.props.deleteContact(index);
  };

  listView(data, index) {
    return (
      <div>
        <div className="row">
          <div className="col">
            {console.log(this.state.query)}
            <li key={index} className="nav-item">
              <Link to={`/adjetter/${data.query}`}>
                <h5>{data.query}</h5>
              </Link>
            </li>
          </div>
          <div className="col">
            <button
              onClick={e => this.deleteContact(e, index)}
              className="btn btn-danger"
            >
              <i className="fa fa-remove" />
            </button>

            <ul />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="wrap">
        <h1>Search for user</h1>
        <div className="row">
          <div className="col">
            <input
              className="form-control"
              placeholder="Enter Github User"
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </div>
          <div className="col">
            <Link
              to={`/adjetter/${this.state.query}`}
              onClick={this.handleSubmit}
              className="btn btn-primary"
            >
              Search
            </Link>
          </div>
        </div>

        <div className="main-container">
          {
            <ul id="slide-out" className="side-nav fixed">
              {this.props.contacts.map((query, i) => this.listView(query, i))}
            </ul>
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: index => dispatch(contactAction.deleteContact(index))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSearchBarPage);
