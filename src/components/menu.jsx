import React, { Component } from 'react';
import { smoothScroll } from '../providers/smoothScroll';

import './menu.css';

export default class Menu extends Component {
    render() {
        return (
            <nav className="menu">
                <ul>
                    <li onClick={() => smoothScroll('data')}>Data</li>
                    <li onClick={() => smoothScroll('endereco')}>Endereço</li>
                    <li onClick={() => smoothScroll('lista-de-presentes')}>Lista de <br /> presentes</li>
                </ul>
            </nav>    
        );
    }
}