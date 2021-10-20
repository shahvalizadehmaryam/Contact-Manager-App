import "./App.css";
import ContactForm from "./components/ContactForm/contactForm";
import ContactList from "./components/ContactList/contactList";
import HeaderComp from "./components/Header/header";

const App = () => {
  return (
    <div className="App">
      <HeaderComp />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
