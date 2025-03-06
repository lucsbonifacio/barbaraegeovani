import React, { Component } from 'react';
import { IMaskInput } from 'react-imask';
import './form.css';

const Form = () => {

    function onSubmit() {
        console.log('Form submitted');
        if (!grecaptcha || grecaptcha && !grecaptcha.ready) return;

        grecaptcha.ready(function() {
            grecaptcha.execute('reCAPTCHA_site_key', {action: 'submit'}).then(function(token) {
                alert("Recaptcha completed!")
            });
        });
    }

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
                    <IMaskInput mask="(00) 00000-0000" name="tel" placeholder="Telefone" />
                </div>
                <button
                    className="button button--primary g-recaptcha"
                    onClick={(event) => {
                        event.preventDefault();
                        onSubmit();
                    }}
                >Enviar</button>
            </form>
        </div>
    )
}

export default Form;