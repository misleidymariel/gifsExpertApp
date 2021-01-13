import React from 'react';
import Proptypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifsGridItem } from './GifsGridItem';


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>

            {loading && <p>loading</p> }

            <div className="card-grid">

                {
                    images.map(img => (
                        <GifsGridItem
                            key={img.id}
                            {...img}
                        />

                    ))

                }

            </div>


        </>
    )
}

GifGrid.prototype ={
    category: Proptypes.string.isRequired
}