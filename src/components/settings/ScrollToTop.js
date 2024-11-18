import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка к началу
    }, [pathname]); // Срабатывает при изменении маршрута

    return null; // Этот компонент не рендерит ничего
};

export default ScrollToTop;