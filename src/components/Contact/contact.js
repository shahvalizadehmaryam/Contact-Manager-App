import styles from "./contact.module.css";
const Contact = ({ contact }) => {
  return (
    <div className={styles.contactItem}>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default Contact;
