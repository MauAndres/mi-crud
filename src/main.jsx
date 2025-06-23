// Importa StrictMode para ayudar a detectar problemas potenciales en la aplicación
import { StrictMode } from 'react';
// Importa createRoot para renderizar la aplicación en el DOM
import { createRoot } from 'react-dom/client';
// Importa los estilos globales de la aplicación
import './index.css';
// Importa el componente principal de la aplicación
import App from './App.jsx';

// Renderiza la aplicación dentro del elemento con id 'root' en el DOM
createRoot(document.getElementById('root')).render(
  // StrictMode envuelve la aplicación para habilitar comprobaciones adicionales en desarrollo
  <StrictMode>
    <App />
  </StrictMode>,
);
