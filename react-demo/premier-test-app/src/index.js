
// LES IMPORTS:  nous importons ici les dépendances dont nous avons besoin pour exécuter le code
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// LE RENDER : c’est le code qui indique ce que nous voulons afficher
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

