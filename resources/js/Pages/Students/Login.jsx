import React, { useState, useEffect } from 'react';
import {usePage } from "@inertiajs/inertia-react";
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';


const Index = () => {
    const { students } = usePage().props;

    return (
        <section className="students__section">
                <h1 className="students__section__h1">Aanmelden</h1>

        <div className="students__section__div">

        </div>
                    <table>
                        <tbody>
                            {students.map(({ id, first_name, class_id, user_id }) => (
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
                                        No students found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
    );
}

export default Index;