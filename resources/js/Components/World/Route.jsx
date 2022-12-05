import React from 'react';
import Island from '@/Components/World/Island';

export default function Route({className, key}) {
    return (
        <div
            className={className}
            key={key}
        >
            <Island className={"world__route__island"}></Island>
        </div>
    );
}
