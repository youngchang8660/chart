import React from "react";
import Table from "@material-ui/core/Table";
import { TableHead, TableCell, TableRow, TableBody } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Data from "../Data/Data";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    marginTop: "50px",
  },
});

const AddedData = (props) => {
  const classes = useStyles();

  const { charts } = props;

  const mapData = Object.keys(charts)
    .flatMap((chartName) =>
      charts[chartName].dataPoints.map((p) => ({ ...p, chartName }))
    )
    .map((dataInfo, i) => <Data dataInfo={dataInfo} key={i} />);

  return (
    <div>
      <Table style={{ border: "1px solid #f3f3f4" }} className={classes.root}>
        <TableHead
          style={{ border: "1px solid #f3f3f4", backgroundColor: "#f3f3f4" }}
        >
          <TableRow>
            <TableCell>Chart Name</TableCell>
            <TableCell>Item</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{mapData}</TableBody>
      </Table>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  const { charts } = reduxState.data;
  return { charts };
};

export default connect(mapStateToProps)(AddedData);