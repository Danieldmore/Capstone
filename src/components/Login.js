import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    // Aquí puedes realizar la lógica para iniciar sesión, por ejemplo, enviar los datos a un servidor.
    console.log(values);
  };

  const validateForm = (values) => {
    const errors = {};

    // Agrega aquí las validaciones que desees para el email y la contraseña.
    if (!values.email) {
      errors.email = 'Email is required';
    }

    if (!values.password) {
      errors.password = 'Password is Required';
    }

    return errors;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateForm}>
      <Form style={{ maxWidth: '300px', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" style={{ width: '100%', padding: '5px' }} />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <Field type="password" id="password" name="password" style={{ width: '100%', padding: '5px' }} />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Log In</button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;