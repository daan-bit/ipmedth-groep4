import React from "react";
import "../../../css/pages/navbar_for_kids.css";
import { MdLogout } from "react-icons/md";
import { BiPhotoAlbum, BiQuestionMark } from "react-icons/bi";
import { Inertia } from "@inertiajs/inertia";

export default function Navbar( {setTutorialWindow}) {
    const goToAlbum = () => {
        Inertia.get(route("album.page"));
    };

    const logOut = () => {
        Inertia.post(route("logout"));
    };

    return (
        <section className="world__navbar">
            <button
                onClick={goToAlbum}
                className="world__navbar__buttons__album"
            >
                <BiPhotoAlbum size={35}></BiPhotoAlbum>
            </button>
            <button
                onClick={() => setTutorialWindow(true)}
                className="world__navbar__buttons__tutorial"
            >
                <BiQuestionMark size={35} />
            </button>
            <button onClick={logOut} className="world__navbar__buttons__logout">
                <MdLogout size={35} />
            </button>
        </section>
    );
}
