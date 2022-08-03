import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs (category);
  
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
