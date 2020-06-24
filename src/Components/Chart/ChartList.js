import React from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import './ChartList.css'

const ChartList = (props) => {
  const { charts } = props;

  return (
    <div className='chartObject'>
      {Object.keys(charts).map((chartName, i) => (
        <Chart chart={{ ...charts[chartName], chartName }} key={i} />
      ))}
    </div>
  );
};

export default connect((reduxState) => ({ charts: reduxState.data.charts }))(
  ChartList
);