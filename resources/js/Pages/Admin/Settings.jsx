import React, {useState, useEffect} from 'react'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Inertia } from '@inertiajs/inertia'
import CustomCollapsible from '@/Components/CustomCollapsible';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';


import '../../../css/components/input.css'
import '../../../css/pages/Admin/adminSettings.css'

function Settings(props) {
    const [values, setValues] = useState({
        old_password: "",
        new_password: "",
        new_password_confirm: "",
      }); 

    const [passwordConfirmError, setpasswordConfirmError] = useState("");

    useEffect(() => {
        setpasswordConfirmError("");
      },[values]);

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        if(values.new_password != values.new_password_confirm){
            setpasswordConfirmError("Wachtwoorden zij niet gelijk");
            e.preventDefault();
            return;
        }
        e.preventDefault()
        Inertia.post('/change-password', values);
      }

  return (
    <article className='adminSettingsPage'>
        <section className='adminSettingsPage__logoutContainer'>
                <ResponsiveNavLink method="post" href={route('logout')} as="button" className={"button-secundary"}>
                    Log uit
                </ResponsiveNavLink>
        </section>
        <section className='adminSettingsPage__contentContainer'>
            <section className='contentContainer__content'>
                <CustomCollapsible trigger={'Wijzig wachtwoord'}>
                    <form onSubmit={handleSubmit} className='content__form'>
                        <section className='form__contentBlock'>
                            <label htmlFor="old_password">Oude wachtwoord:</label>
                            <TextInput
                                id='old_password'
                                type="text"
                                name="old_password"
                                autoComplete={'old_password'}
                                value={values.old_password}
                                isFocused={true}
                                handleChange={handleChange}
                            />
                            {props.message && 
                            <InputError message={props.message} />
                            }
                        </section>
                       
                        <section className='form__contentBlock'>
                            <label htmlFor="new_password">Nieuwe wachtwoord:</label>
                            <TextInput
                                id='new_password'
                                type="text"
                                name="new_password"
                                value={values.new_password}
                                handleChange={handleChange}
                            />
                            <InputError message={passwordConfirmError} />
                        </section>
                        
                        <section className='form__contentBlock'>
                            <label htmlFor="new_password_confirm">Herhaal wachtwoord:</label>
                            <TextInput
                                id="new_password_confirm"
                                type="text"
                                name="new_password_confirm"
                                value={values.new_password_password}
                                handleChange={handleChange}
                            />
                            <InputError message={passwordConfirmError} />
                        </section>
                        
                        <section className='form__buttonContainer'>
                            <PrimaryButton processing={false}>
                                Wijzig
                            </PrimaryButton>
                        </section>
                        
                    </form>
                </CustomCollapsible>
                    
            </section>
        </section>
    </article>
  )
}

export default Settings