import React from "react";
import { Switch, Route } from 'react-router';
import { Main, Search } from "./components";

const Router = () => {
    return (
        <Switch>
            <Route path="/search" component={Search} />
            <Route exact path="/" component={Main} />
            <Route component={Main} />
        </Switch>
    )
}

export default Router;