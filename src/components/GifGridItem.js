import React from 'react'


/**
 * Crea el HTML para mostar los gifs que se encontraron con la busqueda.
 * @param {String} param0 Primer param ID de los gifs
 * @param {String} param1 Segundo param TITLE de los gifs
 * @param {String} param2 Tercer param Url de los gifs
 * @returns Retorna el HTML para mostrar los gifs
 */
const GifGridItem = ({title, url}) => {
    return (
        <div className='card-items'>
            <img className='img' src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
