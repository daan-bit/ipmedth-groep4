import React from "react";
import { Inertia } from "@inertiajs/inertia";
import "../../../css/components/header.css";
import Settings from "@/Components/Teacher/Settings";

export default function Header({ first_name }) {
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            {showMenu && <Settings showMenu={setShowMenu} />}

            <header className="teacherOverview__header">
                <div className="teacherOverview__headerSection teacherOverview__headerSection--left">
                    <img className="header__logo" src="/images/logo.svg" />
                </div>
                <div
                    onClick={toggleMenu}
                    className="teacherOverview__headerSection teacherOverview__headerSection--right"
                >
                    <p className="header__name">{first_name}</p>
                    <div className="header__profileImg__wrapper">
                        <img
                            className="header__profileImg"
                            src={`https://avatars.dicebear.com/api/bottts/${first_name}.svg`}
                        />
                    </div>
                </div>
            </header>
        </>
    );
}
