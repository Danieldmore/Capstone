import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './BookingPage.css';

const BookingSchema = Yup.object().shape({
date: Yup.date().required('Date required'),
time: Yup.string().required('Time required'),
duration: Yup.string().required('Duration required'),
});

const BookingPage = () => {
return (
<div className="booking-page">
<div className="header">
<h1>Book a Table</h1>
<p>Select the best date for you:</p>
</div>

  <div className="booking-form-container">
    <Formik
      initialValues={{
        date: '',
        time: '',
        duration: '1 hour', // Default option
      }}
      validationSchema={BookingSchema}
      onSubmit={(values) => {
        // Logic to submit the form here
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <Field type="date" id="date" name="date" />
            <ErrorMessage name="date" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <Field type="time" id="time" name="time" />
            <ErrorMessage name="time" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Duration:</label>
            <Field as="select" id="duration" name="duration">
              <option value="1 hour">1 hour</option>
              <option value="2 hours">2 hours</option>
              <option value="3 hours">3 hours</option>
            </Field>
            <ErrorMessage name="duration" component="div" className="error-message" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
</div>
);
};

export default BookingPage;