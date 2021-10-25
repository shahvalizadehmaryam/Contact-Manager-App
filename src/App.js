import { Switch } from "react-router";
import "./App.css";
import ContactForm from "./components/ContactForm/contactForm";
import ContactList from "./components/ContactList/contactList";
import HeaderComp from "./components/Header/header";
import { Route } from "react-router-dom";
import Contact from "./components/Contact/contact";
import ContactDetail from "./components/ContactDetail/contactDetail";

const App = () => {
  return (
    <div className="App">
      <HeaderComp />
      <Switch>
        <Route path="/contacts/:id" component={ContactDetail}></Route>
        <Route
          path="/"
          exact
          render={(props) => <ContactList {...props} />}
        ></Route>
        <Route
          path="/add"
          render={(props) => <ContactForm {...props} />}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
