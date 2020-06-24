import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  row: {
    display: "table-row",
    width: "100%",
  },
  name: {
    width: "50%",
  },
  value: {
    width: "50%",
  },
});

const Data = (props) => {
  const classes = useStyles();

  return (
    <TableRow className={classes.row}>
      <TableCell>{props.dataInfo.chartName}</TableCell>
      <TableCell className={classes.name}>{props.dataInfo.name}</TableCell>
      <TableCell className={classes.value}>{props.dataInfo.value}</TableCell>
    </TableRow>
  );
};

// const mapStateToProps = reduxState => reduxState

export default Data;