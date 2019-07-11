import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Axios from "axios";
import uuid from "uuid/v4";
// import Spinner from "../Spinner-1s-200px.gif";
class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      name: "",
      currentUser: "",
      uuid: uuid(),
      isloading: false
    };
  }

  componentDidMount = async () => {
    const name = this.props.match.params.name;
    const url = `https://api.github.com/users/${name}/repos`;
    const response = await Axios.get(url);
    // console.log(response.data);
    for (let i = 0; i < response.data.length; i++) {
      const obj = {
        title: response.data[i].name,
        description: response.data[i].description,
        language: response.data[i].language,
        createdAt: response.data[i].created_at
      };
      const newArray = this.state.details.slice(); // Create a copy
      newArray.push(obj); // Push the object
      this.setState({ details: newArray, currentUser: name, isloading: false });
    }
  };

  createTable = () => {
    let table = [];
    table.push(
      <tr key={this.state.uuid}>
        <td>Title</td>
        <td>Description</td>
        <td>Language</td>
        <td>Created AT</td>
      </tr>
    );
    for (let i = 0; i < this.state.details.length; i++) {
      let children = [];
      children.push(
        <td className="td">{this.state.details[i].title}</td>,
        <td className="td">{this.state.details[i].description}</td>,
        <td className="td">{this.state.details[i].language}</td>,
        <td className="td">{this.state.details[i].createdAt}</td>
      );

      table.push(<tr key={i}>{children}</tr>);
    }
    return table;
  };
  render() {
    const name = this.props.match.params.name;

    return (
      <div>
        <div>
          <h1> hello {name}</h1>
          <table className="table">
            <tbody>{this.createTable()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default GithubUser;
