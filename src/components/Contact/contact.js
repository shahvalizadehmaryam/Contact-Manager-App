import { Link } from "react-router-dom";
import styles from "./contact.module.css";
import { FaUser } from "react-icons/fa";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.item}>
      <Link
        to={{
          pathname: `contacts/${contact.id}`,
          state: { contact: contact },
        }}
      >
        <div className={styles.itemDetail}>
          <FaUser className={styles.userIcon} />
          <div className={styles.contactItem}>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
          </div>
        </div>
      </Link>
      <div>
        <Link to={`/edit/${contact.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  );
};

export default Contact;
