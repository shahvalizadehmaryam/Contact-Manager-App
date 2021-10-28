import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteContact, getContacts } from "../../services/commentService";
import Contact from "../Contact/contact";
import styles from "./contactList.module.css";
import { FaPlus } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";

const ContactList = () => {
  const { addToast } = useToasts();
  const [contactList, setContactList] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContactList(data);
      setAllContacts(data);
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
      addToast("deleted Successfully", { appearance: "success" });
    } catch (error) {
      addToast("something went wrong", { appearance: "error" });
    }
  };
  const searchInputChangeHandler = (e) => {
    setSearchVal(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(searchVal.toLowerCase());
      });
      setContactList(filteredContacts);
    } else {
      setContactList(allContacts);
    }
  };
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.top}>
        <h3>Contact List</h3>
        <Link to="/add" className={styles.linkStyle}>
          <span className={styles.plusIcon}>
            <FaPlus className={styles.iconPlus} />
          </span>
          <span></span>
          add new contact
        </Link>
      </div>
      <input
        className={styles.input}
        type="text"
        onChange={searchInputChangeHandler}
        value={searchVal}
        placeholder="search contact..."
      />
      {contactList.length ? (
        contactList.map((contact) => (
          <div className={styles.contactList} key={contact.id}>
            <Contact
              contact={contact}
              onDelete={() => deleteContactHandler(contact.id)}
            />
          </div>
        ))
      ) : (
        <p>No Contacts Found!</p>
      )}
    </div>
  );
};

export default ContactList;
