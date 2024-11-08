import React from 'react';

import Footer from '../components/footer/Footer';
import Caselist from '../components/cases/Caselist';

const Cases = () => (
    <div className='case padding'>
        <Caselist />
        <Footer />
    </div>
);

export default Cases;