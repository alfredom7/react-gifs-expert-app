import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = ['vegeta'] }) => {
    
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
        <div className='container'>
            <div className='d-flex'>
                <div className='myicon'>
                    <i class="fa-solid fa-dragon"></i>
                </div>
                <div className=''>
                    <div className='mytitle'>Alfredo Gifs App</div>
                    <code className='mysubtitle'>Created By: Alfredo Medina with React</code>
                </div>
            </div>

            <AddCategory setCategories={ setCategories } />
            
            {
                categories.map( category  => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </div>
        </>
    )
}
