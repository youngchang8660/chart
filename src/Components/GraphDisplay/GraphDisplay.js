import React from 'react'
import DataTable from '../DataTable/DataTable'
import ChartList from '../Chart/ChartList'


const GraphDisplay = () => {
    return(
        <div style={{ display: "flex" }}>
            <DataTable />
            <ChartList />
        </div>
    )
}

export default GraphDisplay