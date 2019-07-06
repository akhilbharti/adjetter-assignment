import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "./action/contactAction";
import Axios from "axios";
import uuid from "uuid/v4";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      details: [],
      name: "",
      currentUser: "",
      uuid: uuid()
    };
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: this.state.name
    };
    this.setState({
      name: ""
    });
    this.props.createContact(contact);
  }

  listView(data, index) {
    return (
      <div>
        <div className="row">
          <div className="col">
            <li key={this.state.uuid} className="nav-item">
              <h5>{data.name}</h5>
            </li>
          </div>
          <div className="col">
            <button
              onClick={e => this.deleteContact(e, index)}
              className="btn btn-danger"
            >
              <i className="fa fa-remove" />
            </button>

            <button
              onClick={this.repochange}
              name={data.name}
              className="btn btn-info"
            >
              <i className="fa fa-github" />
            </button>
            <ul />
          </div>
        </div>
        <div id={data.name}>
          <table className="table">{this.createTable()}</table>
        </div>
      </div>
    );
  }
  repochange = user => {
    // const object = {};
    var name = user.target.name;
    console.log(name, this.state.currentUser);

    if (this.state.details.length === 0 || this.state.currentUser !== name) {
      console.log("if");
      this.getUserRepositories(name);
    } else if (
      this.state.details.length !== 0 &&
      this.state.currentUser === name
    ) {
      console.log("else");
      this.setState({ details: [] });
    }

    console.log(name, this.state.currentUser);
    //console.log(this.state.details);
  };

  getUserRepositories = async name => {
    const response = await Axios.get(
      `https://api.github.com/users/${name}/repos`
    );
    for (let i = 0; i < response.data.length; i++) {
      const obj = {
        title: response.data[i].name,
        description: response.data[i].description,
        language: response.data[i].language,
        createdAt: response.data[i].created_at
      };
      const newArray = this.state.details.slice(); // Create a copy
      newArray.push(obj); // Push the object
      this.setState({ details: newArray, currentUser: name });
    }
  };

  deleteContact(e, index) {
    e.preventDefault();
    this.setState({ repoUser: [] });
    this.props.deleteContact(index);
  }

  createTable = () => {
    let table = [];
    table.push(
      <tbody key={this.state.uuid}>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Language</td>
          <td>Created AT</td>
        </tr>
      </tbody>
    );
    for (let i = 0; i < this.state.details.length; i++) {
      let children = [];
      children.push(
        <td className="td">{this.state.details[i].title}</td>,
        <td className="td">{this.state.details[i].description}</td>,
        <td className="td">{this.state.details[i].language}</td>,
        <td className="td">{this.state.details[i].createdAt}</td>
      );

      table.push(<tr>{children}</tr>);
    }
    return table;
  };
  render() {
    return (
      <div>
        <div className="wrap">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.name}
                  className="form-control"
                  placeholder="Enter Github User"
                />
              </div>
              <div className="col">
                <button type="submit" className="btn btn-primary" value="ADD">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* two divs in one */}

        <div className="main-container">
          {
            <ul id="slide-out" className="side-nav fixed">
              {this.props.contacts.map((contact, i) =>
                this.listView(contact, i)
              )}
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
)(App);
