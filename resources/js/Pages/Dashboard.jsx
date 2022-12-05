import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h1>Je bent al ingelogd</h1>}
        >
            <Head title="Dashboard" />
        </AuthenticatedLayout>
    );
}
