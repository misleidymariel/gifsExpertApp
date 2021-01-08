import React from 'react'

export const GifsGridItem = ({ title, url}) => {

    //console.log({id, title, url});

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
