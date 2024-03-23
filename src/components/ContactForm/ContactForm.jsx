/* eslint-disable react/prop-types */
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import css from "./ContactForm.module.css";

const FORM_INITIAL_VALUES = { name: "", number: "" };

const mailBoxSchema = Yup.object().shape({
  name: Yup.string()
    .required("Email address is required!")
    .min(3, "Your contact name must be more than 3 characters!")
    .max(50, `Your contact name must be less than 50 characters!`),
  //   number: Yup.number()
  //     .required("Contact number is required!")
  //     .min(3, "Your contact number must be more than 3 characters!")
  //     .max(7, `Your contact number must be less than 7 characters!`),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    // <div className={clsx(css.boxForm)}>
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={mailBoxSchema}
      onSubmit={handleSubmit}
    >
      <Form className={clsx(css.boxForm)}>
        <label className={clsx(css.labelForm)}>
          <span className={clsx(css.labelSpan)}>Name</span>
          <Field className={clsx(css.labelInput)} type="text" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label className={clsx(css.labelForm)}>
          <span className={clsx(css.labelSpan)}>Number</span>
          <Field
            className={clsx(css.labelInput)}
            type="tel"
            name="number"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          />
          <ErrorMessage component="p" name="number" />
        </label>
        <button className={clsx(css.formButton)} type="submit">
          {" "}
          Create new contact
        </button>
      </Form>
    </Formik>
    // </div>
  );
};

export default ContactForm;
