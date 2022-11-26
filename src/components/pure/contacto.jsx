import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/Contacto.class';


const ContactoComponent = ({ contact: { name, lastname, email, online } }) => {

    const [status, setstatus] = useState(online);

    const changeStatus = () => {
        setstatus(online ? !status : status)
    }

    return (
        <div>
            <hr />
            <h2>Nombres: {`${name} ${lastname}`}</h2>
            <h2>Email: {email}</h2>
            <h2>Estado: {status ? 'Contacto en línea' : 'Contacto no disponible'}</h2>
            <button onClick={changeStatus}>{status ? 'Desconectar' : 'Conectar'}</button>
        </div>
    );
};


ContactoComponent.propTypes = {
    contact: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
