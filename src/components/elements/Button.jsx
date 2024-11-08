import React from 'react';

import '../../styles/styles.css';

const Button = ({ buttonText }) => (
    <button className="btn-default">
        {buttonText}
    </button>
);

export default Button;