import React from "react";
import "../../css/components/modal.css";


/**
 * Component that renders a pop up, For an example see /test
 * @param {Fragment} content this is the content in an fragment
 * @param {bool} modelState is the state of the model defined in the parent
 * @param {useState} setModelState is the useState from the parent
 * @param {bool} bgClosePopUp if true closes popup onclick of background, default is true
 * @returns {HTML} the popup
 */
export default function Modal({ content, modelState = false, setModelState = false, bgClosePopUp = true }) {
    return (() => {
        if (modelState) {
            return (
            <section className="background" onClick={() => setModelState(!bgClosePopUp)}>
                <section onClick={(e) => e.stopPropagation()} className="container">{content}</section>
            </section>
            );
        }
        return null;
    })();
}
