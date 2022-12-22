import React, { useState, useEffect } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/inertia-react';
import '../../../css/pages/Students/Login/UserLogin.css';
import ImageAsPassword from '@/Components/ImageAsPassword';
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Inertia } from '@inertiajs/inertia';
import Modal from '@/Components/Modal';
import StudentItemCard from '@/Components/Student/AICanvas/StudentCardItem';

function UserLogin(props) {
    const [modelState, setModelState] = useState(false);
    const [passwordArrayLogin, setPasswordArrayLogin] = useState([]);
    const [userId, setUserId] = useState(0);


    useEffect(() => {
        setUserId(String(props.students[0].user_id))
    }, [userId]);


    const { data, setData, post, errors } = useForm({
        id: '',
        password: '',
    });

    const getPasswordLength = () => {
        return passwordArrayLogin.length;
    }

    const backToStudentsLogin = (e) => {
        e.preventDefault();
        Inertia.get(route('student.overview'));
    }

    const setPassword = () => {
        const password = passwordArrayLogin[0] + passwordArrayLogin[1];
        return password;
    }


    useEffect(() => {
        if (errors.id) {
            //modal tonen als wachtwoord fout is
            setModelState(true);

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
        //a password string is not already in array && password length is smaller than 2?
        if (!passwordArrayLogin.includes(string) && getPasswordLength() < 2) {
            //add password string to array
            setPasswordArrayLogin(passwordArrayLogin.concat(string))
            this.className += " active";
        } else {
            //remove password string from array
            setPasswordArrayLogin(passwordArrayLogin.filter(e => e !== string))
            this.className = "student__login__images__picture";
        }
    }
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
        post(route('students.login'));
        //reset wachtwoord mocht het wachtwoord fout zijn, zodat kind weer 2 afbeeldingen kan kiezen.
        resetPasswordOnSubmit();
        data.password = '';
        passwordArrayLogin.length = 0;
    };
    const { students } = props;
    return (
        <article className="student">
            <section className="student__section">
                <h1 className="student__title">Aanmelden</h1>
                {students.map(({ id, first_name, user_id }) => (
                    <StudentItemCard key={id} id={id} first_name={first_name} user_id={user_id} />
                ))}
            </section>
            <section className="student__login">
                <form className="student__login__form" onSubmit={submit}>
                    <article className="student__login__images">
                        <div className="student__login__actions">
                            <button className="students__login__actions__button--back" onClick={backToStudentsLogin}>{<FiArrowLeft size="32" />}</button>
                            <h2 className="student__login__images__title">Kies twee plaatjes die van jou zijn</h2>
                        </div>
                        <ImageAsPassword className={'student__login__images__picture'} src={'vogel.png'} data={"Vogel"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'boom.png'} data={"Boom"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'dog.png'} data={"Hondje"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'kat.png'} data={"Katje"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'fiets.png'} data={"Fiets"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'jongen.png'} data={"Jongen"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'meisje.png'} data={"Meisje"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'olifant.png'} data={"Olifant"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'leeuw.png'} data={"Leeuw"} />
                        <ImageAsPassword className={'student__login__images__picture'} src={'papagaai.png'} data={"Papagaai"} />

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
            <Modal content={
                <React.Fragment>
                    <div className="login__modal__error">
                        <article className="login__modal__error__content">
                            <h2 className="login__modal__error__title">Verkeerde plaatjes</h2>
                            <div className="error__icon">
                                <AiOutlineClose size={108} />
                            </div>
                            <button className="login__modal__error__button" onClick={() => setModelState(false)}>Opnieuw</button>
                        </article>
                    </div>
                </React.Fragment>} modelState={modelState} setModelState={setModelState}></Modal>

        </article>
    );
}

export default UserLogin;

