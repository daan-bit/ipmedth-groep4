import React from "react";
import "../../../css/components/Student/Tutorial.css";

export default function Tutorial({text}) {

    return (
        <article className="tutorial">
            <section className="dialog">
                <figure className="mascot_figure">
                    <img className="mascot_image" src="/images/mascot.png" alt="Afbeeldingen van de mascotten" />
                </figure>
                <p className="dialog_text">
                    {text}
                </p>
            </section>
        </article>
    );
}
