import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = ['vegeta'] }) => {
    
    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col-1 col-xs-12 col-sm-3 col-md-1 myicon'>
                    <i class="far fa-images"></i>    
                </div>
                <div className='col-11 col-xs-12 col-sm-9 col-md-11'>
                    <div className='mytitle'>GifExpertApp</div>
                    <div className='mysubtitle'>Created By: Alfredo Medina with React</div>
                </div>
            </div>

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
        </>
    )
}
