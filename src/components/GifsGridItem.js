import React from 'react'
import PropTypes from 'prop-types';

export const GifsGridItem = ({ title, url}) => {

    //console.log({id, title, url});
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifsGridItem.prototype={
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
}