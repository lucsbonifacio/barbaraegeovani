import React, { Component } from 'react';
import './modal.css';

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.visible = this.props.show;
        this.listenContainerScroll();
    }

    listenContainerScroll() {
        const container = document.querySelector('.modal__content');
        const header = document.querySelector('.modal__header');

        container.onscroll = (event) => {
            let scrollTop = event.target.scrollTop;
            let headerHeight = header.getBoundingClientRect().height;

            if (scrollTop > headerHeight) {
                header.classList.add('with--box-shadow');
            } else {
                header.classList.remove('with--box-shadow');
            }
        }
    }

    render() {
        return (
            <div className={this.props.show ? `modal is--visible` : `modal is--hidden`}>
                <div className="modal__header">
                    <button className="button--close" onClick={this.props.onClose}>
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path id="path-1" d="M100 10 90 0 50 40 10 0 0 10 40 50 0 90 10 100 50 60 90 100 100 90 60 50z"></path>
                        </svg>                
                    </button>
                </div>
                <div className="modal__container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}