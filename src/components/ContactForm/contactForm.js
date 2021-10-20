import { useState } from "react";
import styles from "./contactForm.module.css";
const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
  });
  const inputChangeHandler = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formValue);
    setFormValue({
      name: "",
      email: "",
    });
  };
  return (
    <div className={styles.contactFormPart}>
      <h3> Add contact</h3>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.formControl}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formValue.name}
            onChange={inputChangeHandler}
          />
        </div>
        <div className={styles.formControl}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={inputChangeHandler}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ContactForm;
