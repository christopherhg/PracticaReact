// Importamos el componente GifItem 
import { GifItem } from './GifItem'; 
// Importamos el hook personalizado useFetchGifs 
import { useFetchGifs } from '../../hooks/useFetchGifs'; 
 
// Definimos un componente funcional llamado GifGrid que toma una categoría como prop 
export const GifGrid = ({ category }) => { 
 
    // Usamos el hook useFetchGifs para obtener las imágenes y el estado de carga 
    const { images, isLoading } = useFetchGifs( category ); 
     
    // Devolvemos el JSX que se renderizará 
    return ( 
        <> 
            {/* // Mostramos la categoría */} 
            <h3>{ category }</h3> 
            {/* // Si está cargando, mostramos un mensaje de carga */} 
            { 
                isLoading && ( <h2>Cargando...</h2> )        } 
             
                {/* // Creamos un div con la clase card-grid */} 
                <div className="card-grid"> 
                    {/* // Mapeamos las imágenes a componentes GifItem, cada uno con una 
    clave única y las propiedades de la imagen */} 
                    { 
                        images.map( ( image ) => ( 
                            <GifItem  
                                key={ image.id }  
                                { ...image } 
                            /> 
                        )) 
                    } 
                     
                </div> 
     
            </> 
        ) 
    }
