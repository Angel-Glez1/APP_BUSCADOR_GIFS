import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

/**
 * Este funcional component se encarga de cargar dos 
 * componentes principales 
 * 1)-El input para buscar los gifs
 * 2)-La gird donde se iterar los resaltados de la busqueda
 *  
 */
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gatos']);

    return (
        <>
            <h2 className='txt-center'>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
