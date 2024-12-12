import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.css';

const LoginPage = () => (
  <div className={s.loginPage}>
    <h1 className={s.title}>Login</h1>
    <LoginForm />
  </div>
);

export default LoginPage;
