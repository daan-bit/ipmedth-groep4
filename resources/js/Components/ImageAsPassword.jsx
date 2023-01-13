import React from 'react';

export default function ImageAsPassword({
    id,
    className,
    src,
    data,
    divClassName = 'student__login__form__figure',
    passwordState,
    setPasswordState
}) {

    function setPassword(e) {
        if (!passwordState) {
            setPasswordState(data)
            e.target.classList.add("active");
        }
        else if (passwordState == data) {
            setPasswordState(null)
            e.target.classList.remove("active");
        }
    }

    return (
        <figure onClick={(e) => setPassword(e)} className={divClassName}>
        <img className={className} src={"/images/login/" + src} data={data} id={id}></img>
        </figure> 
    );
}