import React from 'react';
import '../../../css/pages/navbar_for_kids.css';
import { MdLogout } from 'react-icons/md';
import { BiPhotoAlbum } from 'react-icons/bi';


export default function Navbar({}) {
    return (
        <section className="world__navbar">
           <div className="world__navbar__buttons">
                <button className="world__navbar__buttons__album"><BiPhotoAlbum size={35} ></BiPhotoAlbum></button>
                <button className="world__navbar__buttons__logout"><MdLogout size={35}/></button>
           </div>
        </section>
    );
}
