const initialState = {
    // charts: {
    //   "test1": {
    //     dataPoints: [
    //       { value: 4, color: "pink", name: "x" },
    //       { value: 20, color: "purple", name: "y" },
    //       { value: 15, color: "gray", name: "z"}
    //     ],
    //   },
    //   "test2": {
    //     dataPoints: [
    //       { value: 11, color: "skyBlue", name: "a" },
    //       { value: 3, color: "orange", name: "b" },
    //       { value: 20, color: "green", name: "c" },
    //     ],
    //   },
    //   "test3": {
    //     dataPoints: [
    //       { value: 11, color: "skyBlue", name: "a" },
    //       { value: 3, color: "orange", name: "b" },
    //       { value: 20, color: "green", name: "c" },
    //     ],
    //   },
    // },
    charts: {}
  };
  const GET_DATA = "GET_DATA";
  const ADD_DATA = "ADD_DATA";
  
  export function getData(dataObj) {
    return {
      type: GET_DATA,
      payload: dataObj,
    };
  }
  
  export function addData(chartName, dataPoint) {
    return {
      type: ADD_DATA,
      payload: {
        chartName,
        dataPoint,
      },
    };
  }
  
  export default function dataReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case ADD_DATA:
        const { chartName, dataPoint } = payload;
        const existingChart = state.charts[chartName] || {/* initial state of a new chart */};
        const existingDataPoints = existingChart.dataPoints || [];
  
        return {
          ...state,
          charts: {
            ...state.charts,
            [chartName]: {
              ...existingChart,
              dataPoints: [...existingDataPoints, dataPoint],
            },
          },
        };
      //  case GET_DATA:
      //    return { ...state, data: payload };
      default:
        return state;
    }
  }
  