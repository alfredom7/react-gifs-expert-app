import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const GifGridItem = ({ title, url }) => {

    const [copied, setCopied] = useState(false)

    return (
        <div className='col-sm-6 col-md-4 col-lg-4 col-xl-3 pb-3'>
            <div className="mycard card bg-light animate__animated animate__fadeIn shadow-sm rounded-3">
            <img src={ url } alt={ title } className="card-img-top img-grid"/>
            <div className="card-body text-center">
                <p className="card-title img-my-title text-capitalize text-truncate">{ title }</p>
                <CopyToClipboard text={url} onCopy={() => setCopied(true)}>
                    {(copied === false) ? <a href="#" className="btn btn-secondary btn-sm btncopy">Copy to clipboard</a> : <a href="#" className="btn btn-success btn-sm btncopied">Copied</a>}
                </CopyToClipboard>
                {/*<a href="#" className="btn btn-success btn-sm">Select</a>*/}
            </div>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}