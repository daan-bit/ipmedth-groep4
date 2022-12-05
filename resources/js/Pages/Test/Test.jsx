import React from 'react';
import TextInput from '@/Components/TextInput';
import CustomSecundaryButton from '@/Components/CustomSecundaryButton';
import PrimaryButton from '@/Components/PrimaryButton';


export default function Test() {
    return (
        <section>
            <h1>Supertitle</h1>
            <br/>
            <h2>Subtitle</h2>
            <br />
            <p>Normal</p>
            <br />
            <PrimaryButton className="button button-primary" processing={false}>Primary</PrimaryButton>
            <br />
            <br />
            <CustomSecundaryButton text={'Secundary'}></CustomSecundaryButton>
            <br />
            <br />
            <TextInput placeholder={'username'} />
        </section>
        
    );
}
