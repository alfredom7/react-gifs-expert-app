import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <div class="input-group mb-3">
            <input 
                type="text" 
                value={ inputValue } 
                onChange={ handleInputChange } 
                className="form-control" 
                placeholder="Write for search..." 
                aria-label="Write for search..." 
                aria-describedby="button-addon2"
            />
            <button onClick={ handleSubmit } className="btn btn-success" type="button" id="button-addon2">Search</button>
            </div>
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
