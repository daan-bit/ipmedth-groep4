import React from 'react';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SecundaryButton from '@/Components/SecundaryButton';


export default function Test() {
    return (
        <section>
            <h1>Supertitle</h1> 
            <br></br>
            <h2>Title</h2>
            <br></br>
            <p>Regular</p>
            <br></br>
            <h3>Small</h3>
            <br></br>
            <TextInput placeholder='Placeholder'/>
            <br></br>
            <br></br>
            <PrimaryButton text="Primary" />
            <br></br>
            <br></br>
            <SecundaryButton text="Secundary" />
            <br></br>
            <br></br>
        </section>
        
    );
}
