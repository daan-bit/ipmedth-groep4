import React, { useEffect, useRef } from 'react';
import '../../css/components/input.css'

export default function TextInput({
    type = 'text',
    name,
    value,
    id,
    className,
    placeholder,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div>
            <input
            	className='input'
                type={type}
                name={name}
                id={id}
                value={value}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}