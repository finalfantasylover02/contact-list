// Import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

// Include your index.scss file into the bundle
import "../styles/index.css";

// Import your own components
import ContactList from './component/ContactList';
import ContactCard from './component/ContactCard'; // Corrected import path
import Layout from './layout.js';

// Render your react application
ReactDOM.render(<Layout/>, document.querySelector("#app"));
