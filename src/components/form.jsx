import React, { Component } from 'react';
import './form.css';

const Form = () => {
    return (
        <div className="form">
            <p className="form__instructions">* Campos obrigatórios</p>
            <form>
                <div className="form__field">
                    <label htmlFor="firstName">Nome<span className="form__required">*</span></label>
                    <input type="text" name="firstName" placeholder="Nome" />
                </div>
                <div className="form__field">
                    <label htmlFor="lastName">Sobrenome<span className="form__required">*</span></label>
                    <input type="text" name="lastName" placeholder="Sobrenome" />
                </div>
                <div className="form__field">
                    <label htmlFor="email">Endereço de e-mail<span className="form__required">*</span></label>
                    <input type="text" name="email" placeholder="Endereço de e-mail" />
                </div>
                <div className="form__field">
                    <label htmlFor="tel">Telefone<span className="form__required">*</span></label>
                    <input type="text" name="tel" placeholder="Telefone" />
                </div>
                <button className="button button--primary">Enviar</button>
            </form>
        </div>
    )
}

export default Form;