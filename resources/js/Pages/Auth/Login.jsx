import React, { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import '../../../css/pages/loginpage.css';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
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

        post(route('login'));
    };

    return (
        <article className='loginpage'>
            <section className='loginpage__inputfieldsContainer'>
                <Head title="Log in" />

                <form onSubmit={submit}>
                    <section>
                        <InputLabel forInput="input" value="Gebruikersnaam" />
                        <TextInput
                            type="text"
                            name="username"
                            value={data.username}
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}
                            placeholder={'Gebruikersnaam'}
                        />

                        <InputError message={errors.username}/>
                    </section>

                    <section className="inputfieldsContainer__lower">
                        <InputLabel forInput="password" value="Wachtwoord" />

                        <TextInput
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            handleChange={onHandleChange}
                            placeholder={'Wachtwoord'}
                        />

                        <InputError message={errors.password} />
                    </section>

                    {/* Comment laten staat. Eventueel later terug bijvoegen */}
                    {/* <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div> */}

                    <section className="inputfieldsContainer__passwordResetContainer">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="normal_text"
                            >
                                Wachtwoord vergeten?
                            </Link>
                        )}
                    </section>

                    <section className="inputfieldsContainer__loginButtonContainer">
                        <PrimaryButton processing={processing}>
                            Log in
                        </PrimaryButton>
                    </section>
                </form>
            </section>
        </article>
    );
}
