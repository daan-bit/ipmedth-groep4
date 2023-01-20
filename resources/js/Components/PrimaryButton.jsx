import React from 'react';
import '../../css/components/button.css'

export default function PrimaryButton({ type = 'submit', className = 'button button-primary', processing, children }) {
    return (
        <button
            type={type}
            className={
                ` ${
                    processing
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}