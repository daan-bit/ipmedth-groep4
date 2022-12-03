import React, { useState, useEffect } from 'react';
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import './Student.css';

const Login = () => {
    const { students } = usePage().props;
    return (
        <article className="students">
            <section className="students__header">
                <h1 className="students__title">Aanmelden</h1>
            </section>
            <section className="students__list">
                {students.map(({ id, first_name, user_id }) => (
                    <article className="students__list__item" key={id}>
                        <InertiaLink href={route("student.login", id)} className="students__list__item__link">
                            <figure className="students__list__item__figure">
                                <img className="students__list__item__figure__picture" src={`https://avatars.dicebear.com/api/bottts/${user_id}.svg`} alt={`Avatar van ${first_name}`}></img>
                            </figure>
                            <article className="students__list__item__name">
                                <h2>{first_name}</h2>
                            </article>
                        </InertiaLink>
                    </article>
                ))}
            </section>
        </article>
    );
}

export default Login;