import React from "react";

import '../assets/css/navbar.css';
export default class Navbar extends React.Component {
    render() {
        return (<div>

            <div className="navbar">
                <a href="/">Home</a>
                <a href="/aboutus">About us</a>
                <div className="dropdown">
                    <button className="dropbtn">Menu
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="/burgers" >BURGERS</a>
                        <a href="/fries">FRIES</a>
                        <a href="/juices">JUICES</a>
                    </div>
                </div>
            </div>


        </div>)
    }
}