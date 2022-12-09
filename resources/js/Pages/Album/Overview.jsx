import AlbumItem from '@/Components/Album/AlbumItem';
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
            <article className="drawings">
                {drawings.map((item, key) => drawings.length > 0 ? (
                    <section className="drawings__item" key={key}>
                        <AlbumItem  key={key} image={item.image} imgAlt={`Afbeelding van opdracht ${assignments[item.assignment_id -1].id}`} assignmentName={assignments[item.assignment_id -1].name} drawingDate={info[item.assignment_id -1].created_at} prompt={assignments[item.assignment_id -1].id}   />
                    </section>
                ) : (
                    <section className="drawings__not__found">
                        <h2 className="drawings__not__found__title">Je hebt nog geen tekeningen gemaakt!</h2>
                    </section>
                )
                )}
            </article>
        </section>
    );
}
