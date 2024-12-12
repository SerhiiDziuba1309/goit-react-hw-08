import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import s from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field name="name" type="text" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />
        </label>
        <label className={s.label}>
          Email
          <Field name="email" type="email" className={s.input} />
          <ErrorMessage name="email" component="div" className={s.error} />
        </label>
        <label className={s.label}>
          Password
          <Field name="password" type="password" className={s.input} />
          <ErrorMessage name="password" component="div" className={s.error} />
        </label>
        <button type="submit" className={s.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
