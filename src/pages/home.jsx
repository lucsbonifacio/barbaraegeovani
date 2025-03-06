import React, { Component } from 'react';
import { smoothScroll, openLink } from '../providers/utilities';

import GiftList from '../components/gift-list';
import Logo from '../components/logo';
import Modal from '../components/modal';
import Playlist from '../components/playlist';
import './home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            windowInnerWidth: 0
        }
    }

    componentDidMount() {
        if (!this.state.windowInnerWidth) {
            const windowInnerWidth = window.innerWidth;
            this.setState({ windowInnerWidth });
            this.resizePictureBasedOnWindow();
        }

        this.listenWindowResize();
        this.matchRedirection();
    }
    
    matchRedirection() {
        const urlHasRedirectParam = window.location.search.includes('redirect');
        const { history } = this.props;

        if (urlHasRedirectParam) {
            const routeToRedirect = window.location.search.replace('?redirect=', '');
            history.push(routeToRedirect);
        }
    }
    
    listenWindowResize() {
        window.addEventListener('resize', () => {
            const windowInnerWidth = window.innerWidth;
            if (windowInnerWidth !== this.state.windowInnerWidth) {
                this.setState({ windowInnerWidth });
                this.resizePictureBasedOnWindow();
            }
        });
    }
    
    resizePictureBasedOnWindow() {
        //https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal }, () => {
            const overflow = this.state.showModal ? 'hidden' : 'auto';
            const body = document.body;
            body.style.overflow = overflow;
        });
    }

    render() {
        return (
            <main className="home">
                <section className="picture">
                    <Logo />
                    <button className="button button--details button--default" type="button" onClick={() => smoothScroll('detalhes')}>
                        <span className="button__label">Detalhes</span>
                        <svg className="chevron-bottom" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path id="path-1" d="M11.6667 18.75 0 30.416664 50 80.416664 100 30.416664 88.3333 18.75 50 57.083364z"></path>
                        </svg>
                    </button>
                </section>
                <section id="detalhes" className="sidebar">
                    <div className="information__container">
                        <article id="data" className="information">
                            <h2>17.05.2025</h2>
                            <p>Sábado, 15h30</p>
                        </article>
                        <article id="endereco" className="information">
                            <h2>Recepção</h2>
                            <p>Rua Toledo Barbosa, 326<br />Salão de Festas</p>
                            <p>Belenzinho</p>
                            <p>São Paulo/SP</p>
                            <button className="button button--default" type="button" onClick={() => openLink('https://maps.app.goo.gl/5P2ps2g5oRVpEbrK8', '_blank')}>Ver no mapa</button>
                        </article>
                        <article id="rsvp" className="information">
                            <h2>Confirme sua presença</h2>
                            <button className="button button--default" type="button" onClick={() => openLink('https://forms.gle/NzxU7d4Cdt17zvXu9', '_blank')}>Confirmar</button>
                        </article>
                        <article id="lista-de-presentes" className="information information__gifts">
                            <h2>Envie um presente</h2>
                            <p>Optamos por não fazer uma lista “convencional” de presentes de casamento. Criamos essa outra opção para que nossos convidados, caso se sintam à vontade, possam contribuir com algum valor. </p>
                            <button className="button button--primary" type="button" onClick={() => this.toggleModal()}>Ver opções</button>
                        </article>
                    </div>
                </section>
                <Modal show={this.state.showModal} onClose={() => this.toggleModal(this.state.modalContent)}>
                    <GiftList />
                </Modal>
            </main>            
        )
    }
}
