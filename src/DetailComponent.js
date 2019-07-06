import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(title, description, language, createdTime, repositories) {
  return { title, description, language, createdTime, repositories };
}

const rows = [
  createData(
    this.props.title,
    this.props.description,
    this.props.language,
    this.props.createdTime,
    this.props.repositories
  )
];

export default function DetailComponent() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Language</TableCell>
            <TableCell align="right">Created Time</TableCell>
            <TableCell align="right">Repositories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.language}</TableCell>
              <TableCell align="right">{row.createdTime}</TableCell>
              <TableCell align="right">{row.repositories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

// import React, { Component } from "react";
// class DetailComponent extends Component {
//   render() {
//     return (
//       <div className="card">
//         <div className="card-body ">
//           <h6 className="card-category text-danger">
//             <i className="material-icons">trending_up</i>{" "}
//             {this.props.description}
//           </h6>
//           <h4 className="card-title">{this.props.title}</h4>
//         </div>
//         <div className="card-footer ">
//           <div className="author">
//             <span>{this.props.language}</span>
//           </div>
//           <div className="stats ml-auto">
//             <i className="material-icons">favorite</i>
//             {this.props.createdTime}
//             {/* <i className="material-icons">chat_bubble</i> 45 */}
//           </div>
//         </div>
//       </div>
//       // <div>
//       //   <h1>{this.props.description}</h1>
//       //   <h1>{this.props.title}</h1>
//       //   <h1>{this.props.language}</h1>
//       //   <h1>{this.props.createdTime}</h1>
//       // </div>
//     );
//   }
// }
