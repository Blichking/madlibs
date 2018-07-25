import React from 'react';


const Input = (title, state, onChange, name) => {
    return (
        <div className="input">
            <input name={title} onChange={onChange}/>
            <label>{title}</label>
        </div>
    )
}

 export default Input;