import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url }) => {

    return (
        <div className='col-md-4 col-lg-3 col-xl-2 pb-3'>
            <div className="mycard card text-white bg-dark animate__animated animate__fadeIn shadow-sm rounded-3">
            <img src={ url } alt={ title } className="card-img-top img-grid"/>
            <div className="card-body text-center">
                <p className="card-title img-my-title text-capitalize text-truncate">{ title }</p>
                <a href="#" className="btn btn-success btn-sm">Select</a>
            </div>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}