import React, { Component } from 'react';
import './gift-list.css';
import Gift from './gift';
import Modal from "./modal";

export default class GiftList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            showModal: false,
            selectedGift: null,
            didCopied: false
        }

        this.qrCode = "00020126360014BR.GOV.BCB.PIX0114+55119941844575204000053039865802BR5925Geovani Ferreira da Silva6009SAO PAULO62140510eUTaORd3vR6304427E";
        this.gifts = [
            {
                icon: 'prato-feito',
                title: 'PF para o Geovani',
                priceInReal: 30,
                url: '#'
            },
            {
                icon: 'sorvete',
                title: 'Sorvetinho para a Babi',
                priceInReal: 30,
                url: '#'
            },
            {
                icon: 'cafe-da-manha',
                title: 'Café da manhã super faturado para o casal',
                priceInReal: 80,
                url: '#'
            },
            {
                icon: 'bone',
                title: 'Boné novo para o Geovani',
                priceInReal: 100,
                url: '#'
            },
            {
                icon: 'chuteira',
                title: 'Troque a chuteira da Babi',
                priceInReal: 150,
                url: '#'
            },
            {
                icon: 'disco-jorge-ben',
                title: 'Disco do Jorge Ben Jor para o Geovani',
                priceInReal: 250,
                url: '#'
            },
            {
                icon: 'disco-lady-gaga',
                title: 'Disco da Lady Gaga para a Babi',
                priceInReal: 250,
                url: '#'
            },
            {
                icon: 'lua-de-mel',
                title: 'Passeio da Lua de Mel',
                priceInReal: 700,
                url: '#'
            },
        ];
    }

    componentDidMount() {

    }

    renderGifts() {
        return this.gifts.map(gift => {
            const { icon, title, priceInReal, url } = gift;
            return (
                <Gift
                    key={title}
                    icon={icon}
                    title={title}
                    priceInReal={priceInReal}
                    url={url}
                    onClick={() => {
                        this.setState({ selectedGift: gift });
                        this.toggleModal();
                    }}
                />
            );
        });
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal }, () => {
            const overflow = this.state.showModal ? 'hidden' : 'auto';
            const body = document.body;
            body.style.overflow = overflow;
        });
    }

    copyQrCode() {
        const qrCode = document.querySelector('.qr-code--textarea');
        qrCode.select();
        qrCode.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(qrCode.value);
        qrCode.blur();
        this.setState({ didCopied: true });

        setTimeout(() => {
            this.setState({ didCopied: false });
        }, 1500);
    }

    render() {
        return (
            <div className="modal__content">
                <h2>Envie um presente</h2>
                <p>Os itens são ilustrativos e essas quantias são algumas sugestões. Se quiser contribuir com algum outro valor que não esteja abaixo, entre em contato conosco.</p>

                <div className="gift__list">
                    {this.renderGifts()}
                </div>
                <Modal show={this.state.showModal} onClose={() => this.toggleModal()}>
                    <div className="modal__content">
                        <button className="button--go-back" onClick={() => this.toggleModal()}></button>
                        <h2>{this.state.selectedGift?.title} <span className="nowrap">(R$ {this.state.selectedGift?.priceInReal})</span></h2>
                        <p>Escaneie o QR Code abaixo com o app do seu banco ou copie o código para fazer um Pix de presente para nós.</p>
                        <div className="qr-code"></div>
                        <p className="qr-code--written">{this.qrCode}</p>
                        <textarea className="qr-code--textarea" rows="8" value={this.qrCode} readOnly />
                        <button className={`button ${this.state.didCopied ? "button--copied button--primary" : "button--default"}`} onClick={() => this.copyQrCode()}>{ this.state.didCopied ? "Código copiado!" : "Copie o código"}</button>
                    </div>
                </Modal>                
            </div>
        )
    }
}