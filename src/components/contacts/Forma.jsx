import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./style.css";

const Forma = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/api/sendFeedback', formData);
      alert('Сообщение успешно отправлено!');
    } catch (error) {
      alert('Не удалось отправить сообщение.');
    }
  };

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="contact__form-wrap">
        <div className="contact__form-group">
          <label htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Иван Иванов"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.ru"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="contact__form-wrap">
        <div className="contact__form-group">
          <label htmlFor="phone">Номер</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+7 (800) 555 35-55"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact__form-group">
        <label htmlFor="email">Ваше название</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Название компании / ИП"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="contact__form-group">
        <label htmlFor="message">Сообщение</label>
        <textarea
          id="message"
          name="message"
          placeholder="Введите сообщение..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="contact__form-block">
        <p className="contact__form-privacy">
          Нажимая на кнопку, <Link className="privacy__link" to="/privacy">вы даёте согласие на обработку персональных данных.</Link>
        </p>
      </div>
      <div className="contact__form-group">
        <button className="contact__btn" type="submit">Отправить</button>
      </div>
    </form>
  );
};

export default Forma;