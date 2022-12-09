import React from 'react';

export default function AlbumItem({ key, image, imgAlt, assignmentName, drawingDate,  prompt}) {
    return (
        <article className="drawings__item" key={key}>
        <figure className="drawings__item__figure">
            <img className="drawings__item__figure__image" src={image} alt={imgAlt}></img>
        </figure>
        <section className="drawings__item__section">
                <article className="drawings__item__section__info">
                    <h2 className="drawings__item__section__info__title">{assignmentName}</h2>
                        <p className="drawings__item__section__info__date">{`Gemaakt op: ${drawingDate}`}</p>
                    <p className="drawings__item__section__info__assignment">Opdracht: {prompt}</p>
                </article>
        </section>
    </article>
    );
}
