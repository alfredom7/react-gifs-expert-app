import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Vegeta']);

    return (
        <div className='container'>
            <h2 className='fw-bold'>GifExpertApp</h2>
            <pre>Created By: Alfredo Medina with React</pre>
            <AddCategory setCategories={ setCategories } />
            <hr />


                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }


        </div>
    )
}
