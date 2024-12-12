import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => (
  <div className={s.registrationPage}>
    <h1 className={s.title}>Register</h1>
    <RegistrationForm />
  </div>
);

export default RegistrationPage;
