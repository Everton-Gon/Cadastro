import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  App  from './container/Home'
import  Users from './container/Users'

function Paginas () {
    return (

        <Router>
            <Switch>

                <Route exact path="/" component={App} />
                <Route exact path="/usuarios" component={Users} />

            </Switch>

        </Router>



    )
}

export default Paginas