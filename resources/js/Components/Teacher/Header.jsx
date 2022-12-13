import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import '../../../css/components/header.css';

export default function Header({ first_name }) {
    const logout = () => {
        Inertia.post('/logout');
    };

    return (
        <header className="teacherOverview__header">
                <div className="teacherOverview__headerSection teacherOverview__headerSection--left">
                    <img className="header__logo" src="/images/logo.svg" />
                </div>
                <div onClick={logout} className="teacherOverview__headerSection teacherOverview__headerSection--right">
                    <p className="header__name">{first_name}</p>
                    <div className="header__profileImg__wrapper">
                        <img
                            className="header__profileImg"
                            src={`https://avatars.dicebear.com/api/bottts/${first_name}.svg`}
                        />
                    </div>
                </div>
            </header>
    );
}
