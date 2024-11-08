import React, { useEffect, useRef } from 'react';

import dom from '../../static/clients/dom.png';
import module from '../../static/clients/module.png';
import newarmor from '../../static/clients/newarmor.png';

const List = () => {
    const clients = [
        {
            id: 1,
            item: dom
        },
        {
            id: 2,
            item: module
        },
        {
            id: 3,
            item: newarmor
        },
    ];

    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        const clone = list.cloneNode(true);
        clone.classList.add('clone');
        list.parentNode.appendChild(clone);
    }, []);

    return (
        <div className='clients__wrap'>
            <div ref={listRef} className='clients__list'>
                {clients.map(client => (
                    <div key={client.id} className="clients__item">
                        <img src={client.item} alt="client" className="clients__img" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
