import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import BlogsList from './BlogsList';
import SingleBlog from './SingleBlog';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={BlogsList} />
                        <Route exact path="/singleblog/:id" component={SingleBlog}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;