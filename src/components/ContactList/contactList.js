import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteContact,
  getContacts,
} from "../../services/commentService";
import Contact from "../Contact/contact";
import styles from "./contactList.module.css";

const ContactList = () => {
  const [contactList, setContactList] = useState(null);
  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContactList(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      const filteredData = contactList.filter((c) => c.id !== id);
      setContactList(filteredData);
      await deleteContact(id);
    } catch (error) {}
  };
  return (
    <div>
      <h3>Contact List</h3>
      <Link to="/add">
        <button>add</button>
      </Link>
      {contactList &&
        contactList.map((contact) => (
          <div className={styles.contactList} key={contact.id}>
            <Contact
              contact={contact}
              onDelete={() => deleteContactHandler(contact.id)}
            />
          </div>
        ))}
    </div>
  );
};

export default ContactList;
