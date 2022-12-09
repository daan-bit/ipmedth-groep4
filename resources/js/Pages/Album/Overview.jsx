import React from 'react';
import '../../../css/pages/Album/albumOverview.css';

export default function Overview(props) {
    const assignments = props.assignments;
    const drawings = props.drawings;
    const info = props.drawingInfo;
    return (
        <section className="album">
            <article className="album__header">
                <h2 className="album__header__title">Tekeningen</h2>
            </article>
            <section className="drawings">
                {drawings.map((item, key) => drawings.length > 0 ? (
                    <article className="drawings__item" key={key}>
                        <figure className="drawings__item__figure">
                            <img className="drawings__item__figure__image" src={`images/drawings/${item.student_id}/${item.image}`} alt={`Afbeelding van opdracht ${assignments[item.assignment_id -1].id}`}></img>
                        </figure>
                        <section className="drawings__item__section">
                                <article className="drawings__item__section__info">
                                    <h2 className="drawings__item__section__info__title">{assignments[item.assignment_id -1].name}</h2>
                                        <p className="drawings__item__section__info__date">{`Gemaakt op: ${info[item.assignment_id -1].created_at}`}</p>
                                    <p className="drawings__item__section__info__assignment">Opdracht: {assignments[item.assignment_id -1].id}</p>
                                </article>
                        </section>
                    </article>
                ) : (
                    <article className="drawings__not__found">
                        <h2 className="drawings__not__found__title">Je hebt nog geen tekeningen gemaakt!</h2>
                    </article>
                )
                )}
            </section>
        </section>
    );
}
