import React from 'react'

export const navBar = () => {
    return (
        <nav className="navbar navbar-light fixed-top nav-menu">
            <div className="container-fluid">
                <a className="title-logo" href="/">RECOMMENDER</a>
                <form className="d-flex">
                    <a className="btn-historial" href="/historial" role="button">History</a>
                </form>
            </div>

        </nav >
    )
}
