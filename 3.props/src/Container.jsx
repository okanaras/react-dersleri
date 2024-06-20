import React from 'react'

function Container({ children }) {
    // function Container(props) {
    // console.log(props); // chilren objesi var o yuzden destringt te children verdik
    return (
        <div>
            <div>Container</div>
            {children}
        </div>)
}

export default Container