import React from 'react';

import './style.css';

const Maps = () => {

    return (
        <div className='maps'>
            <iframe className='maps__frame' title="Карта Ростова-на-Дону, улица Нансена 355" allowFullScreen={true} src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=39.738549%2C47.244197&mode=search&oid=14251943727&ol=biz&z=16"></iframe>
        </div>
    );
};

export default Maps;