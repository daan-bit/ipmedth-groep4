import React, { useState } from 'react';
import TextInput from '@/Components/TextInput';
import CustomSecundaryButton from '@/Components/CustomSecundaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import Modal from '@/Components/Modal';

export default function Test() {
    const [modelState, setModelState] = useState(false);
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
            <br />
            <br />
            <button onClick={() => setModelState(true)}>Open Modal</button>
            <Modal content={
            <React.Fragment>
                <div style={{width: '60vw', height: '40vw', backgroundColor: "var(--color-blue)", zIndex: "50"}}>
                    <h3>Hello</h3>
                    <p>Dit gebruikt een fragment</p>
                    <p>Er zit zelfs custom styling op en een css var!</p>
                    <marquee>Dit is super cool!</marquee>
                    <button onClick={() => setModelState(false)}>Sluiten</button>
                </div>
            </React.Fragment>} modelState={modelState} setModelState = {setModelState}></Modal>
        </section>
        
    );
}
