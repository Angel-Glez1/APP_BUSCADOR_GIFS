import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [valueInput, setValueInput] = useState('');


    // Setea el valor de mi useState
    const handleInputChage = (e) => setValueInput(e.target.value);

    
    // Actualiza el estado de la categorias (compenent Padre) con el value del input.
    const handleSubmit = (e) => {
        e.preventDefault();

        if (valueInput.trim().length > 2) {
            setCategories(catg => [valueInput, ...catg]);
            setValueInput('');
        }

    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                type='text'
                value={valueInput}
                onChange={handleInputChage} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
