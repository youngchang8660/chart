import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GraphDisplay from './Components/GraphDisplay/GraphDisplay'
import Landing from './Components/Landing/Landing'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/graph' component={GraphDisplay} />
    </Switch>
)