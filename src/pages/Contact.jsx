import React from 'react';
import ContactComponent from '../components/Contact';
import Branches from '../components/Branches';

const Contact = () => {
    return (
        <div style={{ paddingTop: '60px' }}>
            <ContactComponent />
            <Branches />
        </div>
    );
};

export default Contact;
