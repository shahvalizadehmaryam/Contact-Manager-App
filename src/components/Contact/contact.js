import styles from "./contact.module.css";
const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contactItem}>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default Contact;
