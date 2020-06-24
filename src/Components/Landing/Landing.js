import React from 'react'
import './Landing.css'

const Landing = (props) => {
    const makeGraph = () => {
        props.history.push('/graph')
    }

    console.log(props)
    return(
        <div className='landingBody'>
            <div className='body-one'>
                <h1>Make Doughnut charts, line graphs, bar charts, and polars graph.</h1>
                <button className='makeButton' onClick={makeGraph}>Create Your Graph</button> 
            </div>
            <div className='body-two'>
                <img alt='doughnut' className='graph-images' width='350' height='300' src='https://2.bp.blogspot.com/-nYVbcivdUdI/WZE8WFg5hqI/AAAAAAAAQfY/uEgGf34HErwAam5O0D2qF0jSRbELrq51QCLcBGAs/s1600/Angular%2B4%2B%2BDoughnut%2Bchart%2Bexample.png' />
                <img alt='line' className='graph-images' width='450' height='300' src='https://s3.amazonaws.com/assets.fullstack.io/n/20200309095518221_react-chartjs.png'/>
                <img alt='bar' className='graph-images' width='450' height='300' src='https://vuejsexamples.net/wp-content/uploads/2017/11/vuejs-bar-chart.png'/>
                <img alt='polar' className='graph-images' width='450' height='300' src='https://docs.manywho.com/wp-content/uploads/2017/11/Screen-Shot-2017-11-25-at-7.43.17-PM-minishadow.png' />
            </div>
        </div>
    )
}

export default Landing