import React, { useState, useEffect } from 'react';
import { usePage } from "@inertiajs/inertia-react";
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';
import './UserLogin.css';
import ImageAsPassword from '@/Components/ImageAsPassword';
import { FiArrowRight } from "react-icons/fi";

function UserLogin(props) {
    const [counter, setCounter] = useState(0);
    const [passwordArrayLogin, setPasswordArrayLogin] = useState([]);
    const [userId, setUserId] = useState(0);


    useEffect(() => {
        setUserId(String(props.students[0].user_id))
        console.log(userId + " dit is user id")
    }, [userId]);


    const { data, setData, post, errors } = useForm({
        id: '',
        password: '',
    });

    const getPasswordLength = () => {
        return passwordArrayLogin.length;
    }

    const resetPassword = () => {
        return passwordArrayLogin.length = 0;
    }

    const setPassword = () => {
        let password = passwordArrayLogin[0] + passwordArrayLogin[1];
        return password;
    }


    useEffect(() => {
        if (errors.id) {
            setCounter(0);
            //hier komt straks model waar het kind ziet dat het wachtword fout was
            console.log('error bekend, modal popup');
        }
    }, [errors]);


    useEffect(() => {
        Array.from(document.getElementsByClassName("student__login__images__picture")).forEach(function (element) {
            element.addEventListener('click', image);
        });
    }, [passwordArrayLogin]);

    function image() {
        //get data attribute from image
        let string = this.getAttribute('data');
        //a password string is not already in array?
        if (!passwordArrayLogin.includes(string)) {
            //add password string to array
            setPasswordArrayLogin(passwordArrayLogin.concat(string))
            this.className += " active";
        } else {
            //remove password string from array
            setPasswordArrayLogin(passwordArrayLogin.filter(e => e !== string))
            this.className = "student__login__images__picture";
        }
    }

    console.log(passwordArrayLogin);
    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const resetPasswordOnSubmit = () => {
        const data = document.getElementsByClassName('active');
        while (data.length) {
            data[0].className = "student__login__images__picture";
        }
    }

    const submit = (e) => {
        data.id = userId;
        data.password = setPassword();
        e.preventDefault();
        console.log(data);
        setPassword();
        post(route('students.login'));
        //reset wachtwoord mocht het wachtwoord fout zijn, zodat kind weer 2 afbeeldingen kan kiezen.
        resetPasswordOnSubmit();
        data.password = '';
        passwordArrayLogin.length = 0;
    };
    const { students } = usePage().props;
    return (
        <article className="student">
            <section className="student__section">
            <h1 className="student__title">Aanmelden</h1>
                {students.map(({ id, first_name, user_id }) => (
                    <article className="student__item" key={id}>
                        <figure className="student__item__figure">
                            <img className="student__item__figure__picture" src={`https://avatars.dicebear.com/api/bottts/${user_id}.svg`} alt={`Avatar van ${first_name}`}></img>
                        </figure>
                        <article className="student__item__header">
                            <h2 className="students__item__header__name">{first_name}</h2>
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

                    <div class="reset">
                        <button onClick={resetPassword}>Reset</button>
                    </div>
                    <h2 className="student__login__images__title">Kies twee plaatjes die van jou zijn</h2>
                    <article className="student__login__images">
                        <ImageAsPassword className={'student__login__images__picture'} src={'/images/vogel.png'} data={"Vogel"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'/images/boom.png'} data={"Boom"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'/images/dog.png'} data={"Hondje"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'/images/kat.png'} data={"Katje"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'/images/fiets.png'} data={"Fiets"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'/images/jongen.png'} data={"Jongen"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'/images/meisje.png'} data={"Meisje"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'/images/olifant.png'} data={"Olifant"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'/images/leeuw.png'} data={"Leeuw"} />
                        <div className="student__login__buttons">
                        <PrimaryButton processing={getPasswordLength() == 2 ? false : true} className="student__login__buttons__button" type="submit"><h2>{<FiArrowRight />}</h2></PrimaryButton>
                    </div>
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
                </form>
            </section>
        </article>
    );
}

export default UserLogin;

