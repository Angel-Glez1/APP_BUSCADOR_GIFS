import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifs";


/**
 * Este Custom Hook es el que se encarga de hacer la busqueda de los gif a la API
 * 
 * @param {String} category Es la categoria que el usuario esta buscando
 * @returns {Object} Retorna un objeto con los gifs encontrados y el loading
 */
export const useFetchGifs = (category) => {

    // Estado de mi custom hooks
    const [state, setstate] = useState({ data: [], loading: true });

    // Efecto para que solo haga la peticion a API
    useEffect(() => {
        getGift(category)
            .then(img => setstate({ data: img, loading: false }))
    }, [category]);

    // Retornamos el objeto
    return state; 
}
