import React, { useState } from "react";
import { Doughnut, Line, Bar, Polar } from "react-chartjs-2";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  chartRoot: {
    height: "450px",
    width: "60%",
    margin: "100px"
    // marginTop: "100px",
    // marginBottom: "100px"
  },
  selectButton: {
    border: "1px solid gray",
    background: "linear-gradient(45deg, #ddd6f3 30%, #faaca8 90%)",
    fontSize: "15px",
    fontWeight: "bold",
    color: "gray",
  },
  menu: {
    marginBottom: "300px",
  },
});

const Chart = (props) => {
  //return <span>CHART: {JSON.stringify(props.chart)}</span>;

  const { chart } = props;
  const { dataPoints, chartName } = chart;

  const [doughnutData, setDoughnutData] = useState({});
  const [lineData, setLineData] = useState({});
  const [barData, setBarData] = useState({});
  const [polarData, setPolarData] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState("doughnut");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let addedData = dataPoints;

  let nameArray = [];
  for (let i = 0; i < dataPoints.length; i++) {
    // console.log(addedData[i].name)
    nameArray.push(addedData[i].name);
    // console.log(nameArray)
  }

  let valueArray = [];
  for (let i = 0; i < dataPoints.length; i++) {
    // console.log(addedData[i].value)
    valueArray.push(addedData[i].value);
    // console.log(valueArray)
  }

  let colorArray = [];
  for (let i = 0; i < dataPoints.length; i++) {
    // console.log(addedData[i].color)
    colorArray.push(addedData[i].color);
    // console.log(colorArray)
  }

  //DoughnutChart
  const doughnutChart = () => {
    setDoughnutData({
      labels: nameArray,
      datasets: [
        {
          label: "test",
          data: valueArray,
          backgroundColor: colorArray,
          borderWidth: 4,
        },
      ],
    });
  };

  const makeDoughnutChart = () => {
    if (dataPoints.length < 1) {
      alert("Please input the data");
    } else {
      doughnutChart();
      handleClose();
      setSelectedTemplate("doughnut");
      console.log(selectedTemplate);
    }
  };

  //LineChart
  const lineChart = () => {
    setLineData({
      labels: nameArray,
      datasets: [
        {
          label: chartName,
          data: valueArray,
          backgroundColor: colorArray,
          borderWidth: 4,
        },
      ],
    });
  };

  const makeLineChart = () => {
    if (dataPoints.length < 1) {
      alert("Please input the data");
    } else {
      lineChart();
      handleClose();
      setSelectedTemplate("line");
      console.log(selectedTemplate);
    }
  };

  //BarChart
  const barChart = () => {
    setBarData({
      labels: nameArray,
      datasets: [
        {
          label: chartName,
          // label: 'test',
          data: valueArray,
          backgroundColor: colorArray,
          borderWidth: 4,
          barThickness: 55,
          suggestedMin: 0
        },
      ],
    });
  };

  const makeBarChart = () => {
    if (dataPoints.length < 1) {
      alert("Please input the data");
    } else {
      barChart();
      handleClose();
      setSelectedTemplate("bar");
      console.log(selectedTemplate);
    }
  };

  //PolarChart
  const polarChart = () => {
    setPolarData({
      labels: nameArray,
      datasets: [
        {
          // label: 'test',
          data: valueArray,
          backgroundColor: colorArray,
          borderWidth: 4
        },
      ],
    });
  };

  const makePolarChart = () => {
    if (dataPoints.length < 1) {
      alert("Please input the data");
    } else {
      polarChart();
      handleClose();
      setSelectedTemplate("polar");
      console.log(selectedTemplate);
    }
  };

  console.log(dataPoints);
  const classes = useStyles();
  return (
    <Paper className={classes.chartRoot}>
      <Button
        className={classes.selectButton}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        SELECT TEMPLATE
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={makeDoughnutChart}>Doughnut Chart</MenuItem>
        <MenuItem onClick={makeLineChart}>Line Chart</MenuItem>
        <MenuItem onClick={makeBarChart}>Bar Chart</MenuItem>
        <MenuItem onClick={makePolarChart}>Polar Chart</MenuItem>
      </Menu>
      {selectedTemplate === "doughnut" ? (
        <Doughnut height="150px" data={doughnutData} />
      ) : selectedTemplate === "line" ? (
        <Line height="150px" data={lineData} />
      ) : selectedTemplate === "bar" ? (
        <Bar height="150px" data={barData} />
      ) : selectedTemplate === "polar" ? (
        <Polar height="150px" data={polarData} />
      ) : (
        <></>
      )}
    </Paper>
  );
};

export default Chart;