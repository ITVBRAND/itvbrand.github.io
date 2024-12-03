import React, { useState, useEffect } from 'react';
import Button from '../elements/Button';
import './style.css';
import './modal.css';
import Forma from '../contacts/Forma';

const FeedBackBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsAnimating(true);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div>
      <Button buttonText="Связаться с нами" onClick={openModal} />

      {isModalOpen && (
        <div
          className={`modal-overlay ${isAnimating ? 'fade-in' : 'fade-out'}`}
          onClick={closeModal}
        >
          <div
            className={`modal ${isAnimating ? 'modal-appear' : 'modal-disappear'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
                &times;
            </button>
            <Forma />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedBackBtn;
