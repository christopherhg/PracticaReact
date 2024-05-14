// Importamos la función useState de React
import { useState } from 'react';
// Definimos un componente funcional llamado AddCategory
export const AddCategory = ({ onNewCategory }) => {
// Creamos una variable de estado inputValue y una función para actualizarla
//setInputValue
    const [ inputValue, setInputValue ] = useState('');
// Definimos una función que se activa cuando cambia el valor del campo de entrada
    const onInputChange = ({ target }) => {
// Actualizamos inputValue con el nuevo valor del campo de entrada
        setInputValue( target.value );
}
// Definimos una función que se activa cuando se envía el formulario
    const onSubmit = ( event ) => {
// Prevenimos la recarga de la página
        event.preventDefault();
// Verificamos que inputValue no esté vacío o solo contenga espacios en blanco
        if( inputValue.trim().length <= 1) return;
// Limpiamos el campo de entrada
        setInputValue('');
// Llamamos a la función onNewCategory con inputValue como argumento
        onNewCategory( inputValue.trim() );
}
    // Devolvemos el JSX que se renderizará
    return (
       <form onSubmit={ onSubmit }>
           <input
              type="text"
              placeholder="Buscar gifs"
              // Vinculamos el valor del campo de entrada a inputValue
              value={ inputValue }
            // Cuando cambia el valor del campo de entrada, llamamos a onInputChange
              onChange={ onInputChange }
          />
    </form>
  )
}