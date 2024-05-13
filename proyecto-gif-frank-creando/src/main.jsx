 
// Importamos la biblioteca de React 
import React from 'react' 
 
// Importamos la biblioteca ReactDOM, que proporciona métodos específicos del DOM para 
React 
import ReactDOM from 'react-dom/client' 

// Importamos un componente llamado ProyectoGif desde otro archivo en el mismo directorio 
import { ProyectoGif } from './ProyectoGif'
//Importamos los estilos que se encuentran en src. ¿Qué significaba "./"? 
import './styles.css'  
 
// Creamos un nuevo contenedor de raíz React en el elemento con el id 'root' 
// y renderizamos el componente ProyectoGif en él 
ReactDOM.createRoot(document.getElementById('root')).render( 
  // React.StrictMode es un componente especial de React que comprueba si tu aplicación tiene problemas potenciales durante el desarrollo 
  
  <React.StrictMode> 
  {/* Aquí es donde se renderiza el componente ProyectoGif */} 
  <ProyectoGif /> 
  </React.StrictMode>, 
  ) 
  