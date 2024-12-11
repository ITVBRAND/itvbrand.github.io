import React, { useEffect, useState } from 'react';

import './style.css';

const TypingText = ({ text, options, speed = 150, pause = 500 }) => {
  const [displayedText, setDisplayedText] = useState(''); // Отображаемый текст
  const [counter, setCounter] = useState(0); // Текущая позиция в строке
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0); // Индекс изменяемого слова
  const [isDeleting, setIsDeleting] = useState(false); // Фаза удаления текста
  const [phase, setPhase] = useState('typingFull'); // Этап анимации

  useEffect(() => {
    const baseText = `${text} `;
    const currentWord = options[currentOptionIndex];
    const fullText = `${baseText}<span class="highlight">${currentWord}</span>`;

    const updateText = () => {
      if (phase === 'typingFull') {
        // Печать основного текста
        if (counter < baseText.length) {
          setDisplayedText(fullText.substring(0, counter + 1));
          setCounter((prevCounter) => prevCounter + 1);
        } else {
          // Завершение печати основного текста
          setTimeout(() => {
            setPhase('switchingWords'); // Переход к фазе переключения слов
            setIsDeleting(true); // Подготовка к удалению
            setCounter(0); // Сброс счётчика
          }, pause);
        }
      } else if (phase === 'switchingWords') {
        if (!isDeleting) {
          // Печать нового слова
          if (counter < currentWord.length) {
            setDisplayedText(baseText + `<span class="highlight">${currentWord.substring(0, counter + 1)}</span>`);
            setCounter((prevCounter) => prevCounter + 1);
          } else {
            // Завершение печати, пауза перед удалением
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          // Удаление текущего слова
          if (counter > 0) {
            setDisplayedText(baseText + `<span class="highlight">${currentWord.substring(0, counter - 1)}</span>`);
            setCounter((prevCounter) => prevCounter - 1);
          } else {
            // Переход к следующему слову
            setIsDeleting(false);
            setCurrentOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
          }
        }
      }
    };

    const interval = setTimeout(updateText, speed);
    return () => clearTimeout(interval);
  }, [counter, isDeleting, phase, text, options, currentOptionIndex, speed, pause]);

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: displayedText, // Вставляем текст с HTML (с <span> для изменения цвета)
      }}
    />
  );
};

export default TypingText;