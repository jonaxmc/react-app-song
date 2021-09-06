import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
    Link
} from "react-router-dom";

import { HistoryScreen } from '../components/HistoryScreen';
import { HomeScreen } from '../components/HomeScreen';
import { ResultScreen } from '../components/ResultScreen';


export const AppRouter = () => {


    return (


        <HashRouter>
            <div>
                <nav className="navbar navbar-light fixed-top nav-menu">
                    <div className="container-fluid">
                        <Link className="title-logo" to="/">RECOMMENDER</Link>
                        <form className="d-flex">
                            <Link className="btn-historial" to="/history" role="button">History</Link>
                        </form>
                    </div>

                </nav >
                <Switch>
                    <Route exact path="/results" component={ResultScreen} />
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/history" component={HistoryScreen} />

                </Switch>
            </div>
        </HashRouter>

    )
}
