import React from 'react';
import './gift.css';

const Gift = (props) => {
    return (
        <div className="gift" onClick={ () => props.onClick ? props.onClick() : null }>
            <div className="gift__container">
                <span className={`icon icon__${props.icon}`}></span>
                <h3 className="title">{props.title}</h3>
                <span className="price">R$ {props.priceInReal}</span>
            </div>
        </div>        
    )
};

export default Gift;