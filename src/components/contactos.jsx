import React from 'react';
import { Contacto } from '../models/Contacto.class';
import ContactoComponent from './pure/contacto';

const Contactos = () => {

    const defaultContact = new Contacto('Steven', 'Nuñez', 'stivenlabrador2002@gmail.com', true);



    return (
        <div>
            <ContactoComponent contact={defaultContact} />
        </div>
    );
}

export default Contactos;
