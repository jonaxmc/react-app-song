import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { HistoryScreen } from '../components/HistoryScreen';
import { HomeScreen } from '../components/HomeScreen';
import { navBar } from '../components/navBar';
import { ResultScreen } from '../components/ResultScreen';


export const AppRouter = () => {


    return (


        <Router>
            <div>
                <nav className="navbar navbar-light fixed-top nav-menu">
                    <div className="container-fluid">
                        <a className="title-logo" href="/">RECOMMENDER</a>
                        <form className="d-flex">
                            <a className="btn-historial" href="/historial" role="button">History</a>
                        </form>
                    </div>

                </nav >
                <Switch>
                    <Route exact path="/results" component={ResultScreen} />
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/history" component={HistoryScreen} />

                </Switch>
            </div>
        </Router>

    )
}
