import React from 'react';
import logo from '../assets/images/ourBurgerLogo.svg';
import '../assets/css/header.css';
export default class Header extends React.Component {
    render() {
        return (

            <div className="Header">
                <header className="Header-header">
                    <img src={logo} className="Header-logo" alt="logo" />
                </header>
                <header className="Header-name">

                    Our Burger

                </header>
            </div>

        );
    }
}