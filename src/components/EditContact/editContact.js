import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./editContact.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { getOneContact, updateContact } from "../../services/commentService";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
const EditContact = ({ history, match }) => {
  const { addToast } = useToasts();
  const [contact, setContact] = useState({ name: "", email: "" });
  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);
  const onSubmit = async (contact) => {
    try {
      const { data } = await updateContact(contact, match.params.id);
      history.push("/");
      addToast("Updated Successfully", { appearance: "success" });
    } catch (error) {
      console.log("error on edit submit...");
    }
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is Required!")
      .min(3, "Name must be 3 characters!"),
    email: Yup.string()
      .email("Email is Invalid format")
      .required("Email is Required!"),
  });
  const formik = useFormik({
    initialValues: contact,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className={styles.contactFormPart}>
      <h3> Add contact</h3>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
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
          Edit Contact
        </button>
      </form>
      <Link to="/" className={styles.backToList}>
        <span className={styles.arrowIcon}>
          <FaArrowLeft />
        </span>
        <span>back to contactList</span>
      </Link>
    </div>
  );
};

export default EditContact;
