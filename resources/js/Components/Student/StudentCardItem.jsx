import React from "react";
import "../../../css/components/Student/StudentItemCard.css";
export default function StudentItemCard({ id, first_name, user_id }) {
    return (
        <section className="student__item" key={id}>
            <figure className="student__item__figure">
                <img
                    className="student__item__figure__picture"
                    src={`https://avatars.dicebear.com/api/bottts/${user_id}.svg`}
                    alt={`Avatar van ${first_name}`}
                ></img>
            </figure>
            <section className="student__item__header">
                <h2 className="students__item__header__name">{first_name}</h2>
            </section>
        </section>
    );
}
