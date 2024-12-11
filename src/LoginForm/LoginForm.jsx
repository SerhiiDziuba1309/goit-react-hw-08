import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import s from './LoginForm.module.css';

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Email
          <Field type="email" name="email" className={s.input} />
          <ErrorMessage name="email" component="div" className={s.error} />
        </label>
        <label className={s.label}>
          Password
          <Field type="password" name="password" className={s.input} />
          <ErrorMessage name="password" component="div" className={s.error} />
        </label>
        <button type="submit" className={s.button}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
