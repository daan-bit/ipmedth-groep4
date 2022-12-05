import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import '../../css/components/button.css'

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className='button button-primary'
        >
            {children}
        </Link>
    );
}
