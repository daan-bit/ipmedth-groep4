import React, { useState, useEffect } from 'react';
import { usePage } from "@inertiajs/inertia-react";
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';
import './UserLogin.css';
import ImageAsPassword from '@/Components/ImageAsPassword';

const UserLogin = () => {

    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);

    const { data, setData, post, errors, reset } = useForm({
        id: String(usePage().props.students[0].user_id),
        password: '',
    });

    useEffect(() => {
        if (errors.id) {
            //hier komt straks model waar het kind ziet dat het wachtword fout was
            console.log('error bekend, modal popup');
        }
    }, [errors]);

    
    useEffect(() => {
        Array.from(document.getElementsByClassName("student__login__images__picture")).forEach(function (element) {
            element.addEventListener('click', image);
            element.addEventListener('click', incrementCounter);
        });
    },[incrementCounter]);

    function image() {
            let string = this.getAttribute('data');
            if (!data.password.includes(string)) {
                data.password += string;
                this.className += " active";
            }
    }

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const resetPasswordOnSubmit = () => {
        const data = document.getElementsByClassName('active');
        while (data.length)  { 
            data[0].className = "student__login__images__picture";
        }
        setCounter(0);
    }

    const submit = (e) => {
        e.preventDefault();
        post(route('students.login'));
        //reset wachtwoord mocht het wachtwoord fout zijn, zodat kind weer 2 afbeeldingen kan kiezen.
        data.password = '';
        resetPasswordOnSubmit();
    };
    const { students } = usePage().props;
    return (
        <article className="student">
            <section className="student__header">
                <h1 className="student__header__title">Aanmelden</h1>
            </section>
            <section className="students__list">
                {students.map(({ id, first_name, user_id }) => (
                    <article className="students__list__item" key={id}>
                        <figure className="students__list__item__figure">
                            <img className="students__list__item__figure__picture" src={`https://avatars.dicebear.com/api/bottts/${user_id}.svg`} alt={`Avatar van ${first_name}`}></img>
                        </figure>
                        <article className="students__list__item__header">
                            <h2 className="students__list__item__header__name">{first_name}</h2>
                        </article>
                    </article>
                ))}
            </section>
            <section className="student__login">
                <form className="student__login__form" onSubmit={submit}>
                    <div className="student__login__form__input">
                        <TextInput
                            type="hidden"
                            name="id"
                            value={data.id}
                            className="student__login__form__input__text"
                            autoComplete="username"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />

                        <InputError message={errors.id} className="student__login__form__input__error" />
                    </div>

                    <h2 className="student__login__images__title">Kies twee plaatjes die van jou zijn</h2>
                    <article className="student__login__images">
                        <ImageAsPassword buttondata={"1"} className={'student__login__images__picture'} src={'https://e7.pngegg.com/pngimages/1017/336/png-clipart-sparrow-bird-cartoon-illustration-cartoon-sparrow-cartoon-character-painted-thumbnail.png'} data={"Vogel"} />
                        <ImageAsPassword buttondata={"2"} className={'student__login__images__picture'} src={'https://e7.pngegg.com/pngimages/1017/336/png-clipart-sparrow-bird-cartoon-illustration-cartoon-sparrow-cartoon-character-painted-thumbnail.png'} data={"Boom"} />
                        <ImageAsPassword buttondata={"3"} className={'student__login__images__picture'} src={'https://e7.pngegg.com/pngimages/1017/336/png-clipart-sparrow-bird-cartoon-illustration-cartoon-sparrow-cartoon-character-painted-thumbnail.png'} data={"Tijger"} />
                        <ImageAsPassword buttondata={"4"} className={'student__login__images__picture'} src={'https://e7.pngegg.com/pngimages/1017/336/png-clipart-sparrow-bird-cartoon-illustration-cartoon-sparrow-cartoon-character-painted-thumbnail.png'} data={"Auto"} />
                        <ImageAsPassword buttondata={"5"} className={'student__login__images__picture'} src={'https://e7.pngegg.com/pngimages/1017/336/png-clipart-sparrow-bird-cartoon-illustration-cartoon-sparrow-cartoon-character-painted-thumbnail.png'} data={"Fiets"} />
                        <ImageAsPassword buttondata={"6"} className={'student__login__images__picture'} src={'https://e7.pngegg.com/pngimages/1017/336/png-clipart-sparrow-bird-cartoon-illustration-cartoon-sparrow-cartoon-character-painted-thumbnail.png'} data={"Jongen"} />
                        <ImageAsPassword buttondata={"7"} className={'student__login__images__picture'} src={'https://e7.pngegg.com/pngimages/1017/336/png-clipart-sparrow-bird-cartoon-illustration-cartoon-sparrow-cartoon-character-painted-thumbnail.png'} data={"Meisje"} />
                        <ImageAsPassword buttondata={"8"} className={'student__login__images__picture'} src={'https://e7.pngegg.com/pngimages/1017/336/png-clipart-sparrow-bird-cartoon-illustration-cartoon-sparrow-cartoon-character-painted-thumbnail.png'} data={"Olifant"} />
                        <ImageAsPassword buttondata={"9"} className={'student__login__images__picture'} src={'https://e7.pngegg.com/pngimages/1017/336/png-clipart-sparrow-bird-cartoon-illustration-cartoon-sparrow-cartoon-character-painted-thumbnail.png'} data={"Leeuw"} />
                    </article>

                    <TextInput
                        type="hidden"
                        name="password"
                        id="password"
                        value={data.password}
                        className="student__login__form__input__text"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                    <div className="student__login__buttons">
                        <PrimaryButton className="student__login__buttons__button" type="submit">Submit</PrimaryButton>
                    </div>
                </form>
            </section>
        </article>
    );
}

export default UserLogin;

