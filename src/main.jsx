import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importamos el componente principal
import './index.css'; // Importamos el archivo de estilos
// Creamos la raíz para renderizar la aplicación React
ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
 <App />
 </React.StrictMode>
);