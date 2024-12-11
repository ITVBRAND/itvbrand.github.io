// src/components/PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';  // Используем Navigate для перенаправления
import { auth } from '../firebase';  // Убедитесь, что путь правильный
import { onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Получаем текущего пользователя
    });

    return () => unsubscribe(); // Очистка подписки при размонтировании
  }, []);

  if (user === null) {
    return null; // Можно вернуть loader или null до завершения проверки
  }

  return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;