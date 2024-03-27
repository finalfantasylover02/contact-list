import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import injectContext from "./store/flux"; // Adjust import path for flux
import { Context } from "./store/appContext"; // Adjust import path for appContext
import ContactList from "./components/ContactList"; // Import ContactList component
import ContactCard from "./components/ContactCard"; // Import ContactCard component

// Adjust import paths for other views/components as needed

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <Context.Provider value={injectContext()}>
      <Router basename={basename}>
          <Routes>
            <Route path="/" element={<ContactList />} /> {/* Adjust route for ContactList */}
            <Route path="/contact/:id" element={<ContactCard />} /> {/* Adjust route for ContactCard */}
            {/* Add other routes for your application */}
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
      </Router>
    </Context.Provider>
  );
};

export default Layout;
