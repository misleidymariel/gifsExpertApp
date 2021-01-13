import React, { useState } from 'react'
import Proptypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GitExpertApp = ( { defaultCategories  = [] }) => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball']


    const [categories, setCategories] = useState( defaultCategories  );
    // const handlenAdd = ()=>{
    //   setCategories( cats => [...cats, 'Misleidy']);

    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key = {category}
                        category ={ category}/>
                    ))
                }
            </ol>


        </>

    )
};

GitExpertApp.prototype ={
    category: Proptypes.string.isRequired
}
