import { Link } from "react-router-dom";
import styles from "./contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemDetail}>
        <FaUser className={styles.userIcon} />
        <div className={styles.contactItem}>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
        </div>
      </div>
      <div className={styles.btnPart}>
        <ReactTooltip />
        <Link to={`/edit/${contact.id}`}>
          <button className={styles.editBtn} data-tip="Edit">
            <FaEdit className={styles.editIcon} />
          </button>
        </Link>
        <button
          onClick={onDelete}
          className={styles.deleteBtn}
          data-tip="Delete"
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Contact;
