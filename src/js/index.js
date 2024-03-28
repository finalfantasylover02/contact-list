// Import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

// Include your index.scss file into the bundle
import "../styles/index.css";

// Import your own components
import ContactCard from './component/ContactCard.jsx'; 
import ContactList from './component/ContactList.jsx';

import Layout from './layout.js';

// Render your react application
ReactDOM.render(<Layout/>, document.querySelector("#app"));
