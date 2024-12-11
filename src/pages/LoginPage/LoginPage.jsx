import React from 'react';
import s from './LoginPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const LoginPage = () => (
  <div className={s.loginPage}>
    <h1 className={s.head}>Login</h1>
    <ContactForm />
  </div>
);

export default LoginPage;
