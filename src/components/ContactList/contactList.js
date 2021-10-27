import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteContact, getContacts } from "../../services/commentService";
import Contact from "../Contact/contact";
import styles from "./contactList.module.css";

const ContactList = () => {
  const [contactList, setContactList] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
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
    } catch (error) {}
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
    <div>
      <h3>Contact List</h3>
      <div>
        <Link to="/add">
          <button>add</button>
        </Link>
      </div>
      <div>
        <input
          type="text"
          onChange={searchInputChangeHandler}
          value={searchVal}
        />
      </div>
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
