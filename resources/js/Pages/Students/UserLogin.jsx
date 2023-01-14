import React, { useState, useEffect } from "react";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/inertia-react";
import "../../../css/pages/Students/Login/UserLogin.css";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";
import StudentItemCard from "@/Components/Student/StudentCardItem";
import LoginWrapper from "@/Components/Student/LoginWrapper";

function UserLogin(props) {
    const [modelState, setModelState] = useState(false);
    const [userId, setUserId] = useState(0);
    const [passwordPage, setPasswordPage] = useState(1);
    const [nextPasswordPage, setNextPasswordPage] = useState(true);
    const [password1, setPassword1] = useState(null);
    const [password2, setPassword2] = useState(null);

    useEffect(() => {
        const page = document.getElementsByClassName(
            "student__login__form__password"
        );
        const passwordGrid = document.getElementsByClassName(
            "student__login__form__image_wrapper"
        );

        if (passwordPage == 1) {
            page[0].classList.add("student__login__form__password-active");
            passwordGrid[0].classList.remove(
                "student__login__form__image_wrapper__hidden"
            );

            page[1].classList.remove("student__login__form__password-active");
            passwordGrid[1].classList.add(
                "student__login__form__image_wrapper__hidden"
            );
        } else if (passwordPage == 2) {
            page[0].classList.remove("student__login__form__password-active");
            passwordGrid[0].classList.add(
                "student__login__form__image_wrapper__hidden"
            );

            page[1].classList.add("student__login__form__password-active");
            passwordGrid[1].classList.remove(
                "student__login__form__image_wrapper__hidden"
            );
        }
    }, [passwordPage]);

    useEffect(() => {
        setUserId(String(props.students[0].user_id));
    }, [userId]);

    const { data, setData, post, errors } = useForm({
        id: "",
        password: "",
    });

    const backToStudentsLogin = (e) => {
        e.preventDefault();
        Inertia.get(route("student.overview"));
    };

    const setPassword = () => {
        return password1 + password2;
    };

    useEffect(() => {
        if (errors.id) {
            //modal tonen als wachtwoord fout is
            setModelState(true);
        }
    }, [errors]);

    useEffect(() => {
        setNextPasswordPage(!nextPasswordPage);
    }, [password1, password2]);

    const resetPasswordOnSubmit = () => {
        // document.getElementById("js--submitButton").type = "button";
    };

    const gotoNextPasswordPage = (e) => {
        e.preventDefault();
        setPasswordPage(2);
        if (password2) setNextPasswordPage(true);
        else setNextPasswordPage(false);
    };

    const gotoPrevPasswordPage = () => {
        setPasswordPage(1);
        if (password1) setNextPasswordPage(true);
    };

    const submit = (e) => {
        e.preventDefault();
        data.id = userId;
        data.password = setPassword();
        post(route("students.login"));
        //reset wachtwoord mocht het wachtwoord fout zijn, zodat kind weer 2 afbeeldingen kan kiezen.
        resetPasswordOnSubmit();
        data.password = "";
    };
    const { students } = props;
    return (
        <main className="background_table">
            <button
                className="students__return_button"
                onClick={backToStudentsLogin}
            >
                {<FiArrowLeft size="32" />}&nbsp;Terug
            </button>
            <article className="student">
                <section className="student__header">
                    <h1 className="student__title">
                        Kies je {passwordPage} plaatje
                    </h1>
                    {students.map(({ id, first_name, user_id }) => (
                        <div className="student__card">
                            <StudentItemCard
                                key={id}
                                id={id}
                                first_name={first_name}
                                user_id={user_id}
                            />
                        </div>
                    ))}
                </section>
                <form className="student__login__form" onSubmit={submit}>
                    <section className="student__login__form__password__wrapper">
                        <div className="student__login__form__password">1</div>
                        <div className="student__login__form__password">2</div>
                    </section>
                    <section
                        className="login__collection"
                        data-page={passwordPage}
                    >
                        <LoginWrapper
                            passwordState={password1}
                            setPasswordState={setPassword1}
                        />
                        <LoginWrapper
                            passwordState={password2}
                            setPasswordState={setPassword2}
                        />
                    </section>

                    <section className="student__login__buttons">
                        <button
                            type="button"
                            disabled={passwordPage == 2 ? false : true}
                            className="student__login__buttons__button"
                            data-color="yellow"
                            onClick={() => gotoPrevPasswordPage()}
                        >
                            {<FiArrowLeft size={24} />}&nbsp;Ga Terug
                        </button>
                        {passwordPage == 1 ? (
                            <button
                                type="button"
                                disabled={nextPasswordPage ? false : true}
                                className="student__login__buttons__button"
                                data-color="blue"
                                onClick={(e) => gotoNextPasswordPage(e)}
                            >
                                Volgende&nbsp;{<FiArrowRight size={24} />}
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={nextPasswordPage ? false : true}
                                className="student__login__buttons__button"
                                data-color="green"
                            >
                                Klaar&nbsp;{<FiArrowRight size={24} />}
                            </button>
                        )}
                    </section>
                </form>
            </article>

            {/* POPUP MODEL, IF PASSWORD IS WRONG */}
            <Modal
                content={
                    <React.Fragment>
                        <div className="login__modal__error">
                            <article className="login__modal__error__content">
                                <h2 className="login__modal__error__title">
                                    Weet je zeker dat je de goede plaatjes hebt
                                    aangeklikt?
                                </h2>
                                <div className="error__icon">
                                    <AiOutlineClose size={108} />
                                </div>
                                <button
                                    className="login__modal__error__button"
                                    onClick={() => setModelState(false)}
                                >
                                    Probeer opnieuw
                                </button>
                            </article>
                        </div>
                    </React.Fragment>
                }
                modelState={modelState}
                setModelState={setModelState}
            ></Modal>
        </main>
    );
}

export default UserLogin;
