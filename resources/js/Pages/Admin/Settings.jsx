import React, {useState, useEffect} from 'react'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Inertia } from '@inertiajs/inertia'
import CustomCollapsible from '@/Components/CustomCollapsible';
import PrimaryButton from '@/Components/PrimaryButton';

//Dit moet een import worden van lightmode input.css
import '../../../css/components/input.css'

import '../../../css/pages/Admin/adminSettings.css'

function Settings() {
    const [values, setValues] = useState({
        old_password: "",
        new_password: "",
        new_password_confirm: "",
      })
    
    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post('/change-password', values)
      }

  return (
    <article className='adminSettingsPage'>
        <section className='adminSettingsPage__logoutContainer'>
                <ResponsiveNavLink method="post" href={route('logout')} as="button">
                    Log Out
                </ResponsiveNavLink>
        </section>
        <section className='adminSettingsPage__contentContainer'>
            <section className='contentContainer__content'>
                <CustomCollapsible trigger={'Verander wachtwoord'}>
                    <form onSubmit={handleSubmit} className='content__form'>
                        <section className='form__contentBlock'>
                            <label htmlFor="old_password">Oude password:</label>
                            <input id="old_password" value={values.old_password} onChange={handleChange} />
                        </section>
                       
                        <section className='form__contentBlock'>
                            <label htmlFor="new_password">Nieuwe password:</label>
                            <input id="new_password" value={values.new_password} onChange={handleChange} />
                        </section>
                        
                        <section className='form__contentBlock'>
                            <label htmlFor="new_password_confirm">Herhaal wachtwoord:</label>
                            <input id="new_password_confirm" value={values.new_password_confirm} onChange={handleChange} />
                        </section>
                        

                        <PrimaryButton processing={false}>
                            Verander wachtwoord
                        </PrimaryButton>
                    </form>
                </CustomCollapsible>
                    
            </section>
        </section>
    </article>
  )
}

export default Settings