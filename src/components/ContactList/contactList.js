import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact/contact";
import styles from "./contactList.module.css";

const ContactList = () => {
  const [contactList, setContactList] = useState(null);
  useEffect(() => {
    getContactsList();
  }, []);

  const getContactsList = () => {
    axios.get("http://localhost:3001/contacts").then((res) => {
      setContactList(res.data);
    });
  };
  const deleteContactHandler = (id) => {
    axios
      .delete(`http://localhost:3001/contacts/${id}`)
      .then((res) => getContactsList())
      .catch((err) => console.log(err));
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
