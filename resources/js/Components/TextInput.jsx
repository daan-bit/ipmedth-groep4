import React, { useEffect, useRef } from 'react';
import '../../css/components/input.css'

export default function TextInput({
    type = 'text',
    name,
    value,
    placeholder,
    autoComplete,
    required,
    isFocused,
    handleChange,
    className,
    id
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
                id={id}
            	className={`input ${className}`}
                type={type}
                name={name}
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