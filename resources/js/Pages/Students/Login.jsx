import React, { useState, useEffect } from 'react';
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import '../../../css/pages/Students/Login/Student.css';
import StudentItemCard from '@/Components/Student/AICanvas/StudentCardItem';

const Login = () => {
    const { students } = usePage().props;
    return (
        <article className="students">
            <section className="students__header">
                <h1 className="students__title">Aanmelden</h1>
            </section>
            <section className="students__list">
                {students.map(({ id, first_name, user_id }) => (
                    <InertiaLink key={id} href={route("student.login", id)} className="student__item__link">
                        <StudentItemCard id={id} first_name={first_name} user_id={user_id} />
                    </InertiaLink>
                ))}
            </section>
        </article>
    );
}

export default Login;