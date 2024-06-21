import React from 'react'
// import '../css/Course.css';

function Course({ customPropsName }) {
    const { id, title, description, price, link, image } = customPropsName;
    return (
        <div className='course'>
            <img src={image} width={220} height={110} />
            <h4 className='course-title'>{title}</h4>
            <h5 className='course-desc'>{description}</h5>
            <h3 className='course-price'>{price} TL</h3>
            <div className='course-link'>
                <a href={link}>KURSA GIT</a>
            </div>
        </div>
    )
}

export default Course