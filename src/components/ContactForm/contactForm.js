import styles from "./contactForm.module.css";
const ContactForm = () => {
  return (
    <div className={styles.contactFormPart}>
      <h3> Add contact</h3>
      <form>
        <div className={styles.formControl}>
          <label>Name</label>
          <input type="text" />
        </div>
        <div className={styles.formControl}>
          <label>Email</label>
          <input type="email" />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default ContactForm;
