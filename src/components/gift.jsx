import React from 'react';
import './gift.css';

const Gift = (props) => {
    return (
        <a className="gift" href={props.url} target="_blank" rel="noopener noreferrer">
            <div className="gift__container">
                <span className={`icon icon__${props.icon}`}></span>
                <h3 className="title">{props.title}</h3>
                <span className="price">R$ {props.priceInReal}</span>
            </div>
        </a>        
    )
};

export default Gift;