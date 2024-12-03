import React from 'react';

import '../../styles/styles.css';

const Button = ({ buttonText, onClick }) => {
    return <button className="btn-default" onClick={onClick}>
            {buttonText}
        </button>;
  };

export default Button;