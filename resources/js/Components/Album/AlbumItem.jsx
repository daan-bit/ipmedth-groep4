import React, { useEffect, useState } from "react";

export default function AlbumItem({
    image,
    imgAlt,
    assignmentName,
    drawingDate,
    prompt,

    setContentModel,
    setModelState,
}) {
    const [date, setDate] = useState();

    useEffect(() => {
        setDate(new Date(drawingDate).toLocaleDateString());
    }, [setDate]);

    function openModel() {
        setModelState(true);
        setContentModel(
            <React.Fragment>
                <section className="model">
                    <figure className="model__figure">
                        <img
                            className="model__image"
                            src={image}
                            alt={imgAlt}
                        ></img>
                    </figure>
                    <article className="model__info">
                        <h2 className="model__info__title">
                            {prompt}
                        </h2>
                        <p className="model__info__date">{`Gemaakt op: ${date}`}</p>
                        <p className="model__info__assignment">
                            Opdracht: {assignmentName}
                        </p>
                    </article>
                </section>
            </React.Fragment>
        );
    }

    return (
        <article className="drawings__item" onClick={() => openModel()}>
            <figure className="drawings__item__figure">
                <img
                    className="drawings__item__figure__image"
                    src={image}
                    alt={imgAlt}
                ></img>
            </figure>
            <section className="drawings__item__section">
                <article className="drawings__item__section__info">
                    <h3 className="drawings__item__section__info__title">
                        {prompt}
                    </h3>
                    <p className="drawings__item__section__info__date">{`Gemaakt op: ${date}`}</p>
                    <p className="drawings__item__section__info__assignment">
                        Opdracht: {assignmentName}
                    </p>
                </article>
            </section>
        </article>
    );
}
