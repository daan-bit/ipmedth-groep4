import React, { useState, useEffect } from 'react';
import {usePage } from "@inertiajs/inertia-react";
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';


export default function Login () {
    const { data, setData, post, errors, reset } = useForm({
        id: '',
        password: '',
        remember: '',
    });
    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('students.login'));
        console.log(data.user_id, data.password);
        console.log('gesubmit');
    };


    const { students } = usePage().props;
    console.log(students);
    return (
        <section className="students__section">
            <h1 className="students__section__h1">Aanmelden</h1>
        <div className="students__section__div">

        </div>

        <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="text" value="id" />

                    <TextInput
                        type="text"
                        name="id"
                        value={data.id}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.id} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>


                <div className="flex items-center justify-end mt-4">


                <PrimaryButton  className="button button-primary" type="submit">Login</PrimaryButton>
                </div>
            </form>
                    <table>
                        <tbody>
                            {students.map(({ id, first_name, user_id }) => (
                                <tr key={id}>
                                <td className="border-t">
                                     {id}
                                    </td>
                                    <td className="border-t">
                                    </td>
                                        <td className="border-t">
                                     {first_name}
                                    </td>
                                    
                                    <td className="border-t">
                                     {user_id}
                                    </td>
                                </tr>
                            ))}
                            {students.length === 0 && (
                                <tr>
                                    <td
                                        className="px-6 py-4 border-t"
                                        colSpan="4"
                                    >
                                        Geen student gevonden met deze id.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
    );
}

