import { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import styles from "./contactForm.module.css";
const initialValues = {
  name: "",
  email: "",
};
const ContactForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is Required!")
      .min(6, "Name must be 6 characters!"),
    email: Yup.string()
      .email("Email is Invalid format")
      .required("Email is Required!"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    validateOnMount: true,
  });
  return (
    <div className={styles.contactFormPart}>
      <h3> Add contact</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            {...formik.getFieldProps("name")}
          />

          {formik.errors["name"] && formik.touched["name"] && (
            <div className={styles.error}>{formik.errors["name"]}</div>
          )}
        </div>
        <div className={styles.formControl}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            {...formik.getFieldProps("email")}
          />
          {formik.errors["email"] && formik.touched["email"] && (
            <div className={styles.error}>{formik.errors["email"]}</div>
          )}
        </div>
        <button type="submit" disabled={!formik.isValid}>
          Add
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
