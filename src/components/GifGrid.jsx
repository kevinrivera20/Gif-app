import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs (category);
    console.log({images, isLoading})
  
  return (
    <>
      <h3 className='title'>{category}</h3>
      <br/>
      {
        isLoading && ( <h2 className='title'>Cargando...</h2> ) 
      }
      <div className='card-grid'>
        {
            images.map( ( image )  => (    
                <GifItem
                    key={ image.id }
                    { ...image }
                />
            ))
        }
      </div>
    </>
  );
};
