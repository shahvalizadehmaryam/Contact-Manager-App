import { Switch } from "react-router";
import "./App.css";
import ContactForm from "./components/ContactForm/contactForm";
import ContactList from "./components/ContactList/contactList";
import HeaderComp from "./components/Header/header";
import { Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/contactDetail";
import EditContact from "./components/EditContact/editContact";
import { ToastProvider } from "react-toast-notifications";
const App = () => {
  return (
    <div className="App">
      <HeaderComp />
      <Switch>
        <ToastProvider autoDismiss={true}>
          <Route path="/edit/:id" component={EditContact}></Route>
          <Route path="/contacts/:id" component={ContactDetail}></Route>
          <Route path="/add" component={ContactForm}></Route>
          <Route path="/" exact component={ContactList}></Route>
        </ToastProvider>
      </Switch>
    </div>
  );
};

export default App;
