import React from 'react';
import '../../css/components/inputLabel.css'

export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className='inputLabel'>
            {value ? value : children}
        </label>
    );
}
