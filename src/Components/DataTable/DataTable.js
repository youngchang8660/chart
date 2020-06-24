import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddedData from "../AddedData/AddedData";
import { connect } from "react-redux";
import { addData } from "../../ducks/dataReducer";

const useStyles = makeStyles({
  root: {
    width: "70%",
    margin: "100px",
    border: "0",
    borderRadius: 3,
    padding: "30px",
  },
  TypographyStyle: {
    fontWeight: 400,
    color: "gray",
    marginTop: "30px",
  },
  Input: {
    marginRight: "30px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  button: {
    background: "linear-gradient(45deg, #ddd6f3 30%, #faaca8 90%)",
    fontSize: "15px",
    fontWeight: "bold",
    color: "white",
  },
});

const DataTable = (props) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const [chartName, setChartName] = useState("");
  const [dataDetail, setDataDetail] = useState({});

  const submitData = () => {
    setDataDetail({
      name: name,
      value: value,
      color: color,
      chartName: chartName,
    });
  };

  // useEffect(() => {
  //     props.addData(dataDetail)
  // }, [dataDetail])

  useEffect(() => {
    if (dataDetail.hasOwnProperty("name")) {
      const { addData } = props;
      const { name, value, color, chartName } = dataDetail;
      addData(chartName, { name, value, color });
    }
    setName("");
    setValue("");
    setColor("");
  }, [dataDetail]);

  // console.log(name)
  // console.log(value)
  // console.log(dataDetail)
  // console.log(props.data)
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography
          className={classes.TypographyStyle}
          variant="h5"
          component="h3"
        >
          Chart Title
        </Typography>
        <Input
          className={classes.Input}
          placeholder="chart name"
          value={chartName}
          onChange={(e) => setChartName(e.target.value)}
        />
        <Typography
          className={classes.TypographyStyle}
          variant="h5"
          component="h3"
        >
          Chart Data
        </Typography>
        <Input
          className={classes.Input}
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          className={classes.Input}
          placeholder="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          className={classes.Input}
          placeholder="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <Button
          className={classes.button}
          onClick={submitData}
          style={{ border: "1px solid gray", color: "gray", fontWeight: "700" }}
        >
          Submit
        </Button>
        <AddedData dataDetail={dataDetail} />
      </Paper>
    </div>
  );
};

const mapStateToProps = (reduxState) => {
  console.log({ reduxState });
  const { charts } = reduxState.data;
  return { charts };
};

export default connect(mapStateToProps, { addData })(DataTable);