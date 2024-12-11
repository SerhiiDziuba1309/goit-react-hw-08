import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => (
  <div className={s.registrationPage}>
    <h1 className={s.head}>Register</h1>
    <ContactForm />
  </div>
);

export default RegistrationPage;
