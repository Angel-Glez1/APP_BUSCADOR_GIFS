import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

/**
 * 
 * @param {String} param0 Category a buscar
 * @returns Retorna todos los gifs que coincidieran con la busqueda
 */
const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className='txt-center' >{category}</h3>
            
            { loading && <p> Loading... </p>}
            
            <div className='card'>
                {
                    data.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;
