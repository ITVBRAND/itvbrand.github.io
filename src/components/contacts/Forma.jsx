import React, { useState } from 'react';
import './style.css';

const Forma = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        privacy: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const sendMessageToTelegram = async (message) => {
        const botToken = '7778786571:AAGx8bI7n_57RJ6ZLBo0xb5vh59ee94J8SU';
        const chatId = '824020353';
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, phone, company, message } = formData;

        const telegramMessage = `
            Имя: ${name}
            Email: ${email}
            Номер: ${phone}
            Компания: ${company}
            Сообщение: ${message}
        `;

        try {
            await sendMessageToTelegram(telegramMessage);
            alert('Сообщение отправлено!');
        } catch (error) {
            alert('Ошибка при отправке сообщения.');
        }
    };

    return (
        <form className='contact__form' onSubmit={handleSubmit}>
            <div className="contact__form-wrap">
                <div className="contact__form-group">
                    <label htmlFor="name">Имя</label>
                    <input type="text" id="name" name="name" placeholder="Иван Иванов" value={formData.name} onChange={handleChange} />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="example@mail.ru" required value={formData.email} onChange={handleChange} />
                </div>
            </div>
            <div className="contact__form-wrap">
                <div className="contact__form-group">
                    <label htmlFor="phone">Номер</label>
                    <input type="tel" id="phone" name="phone" placeholder="+7 (800) 555 35-55" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="contact__form-group">
                    <label htmlFor="company">Компания</label>
                    <input type="text" id="company" name="company" placeholder="Название компании / ИП" value={formData.company} onChange={handleChange} />
                </div>
            </div>
            <div className="contact__form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea id="message" name="message" placeholder="Введите сообщение..." value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="contact__form-block">
                <input className='contact__form-checkbox' type="checkbox" id="privacy" name="privacy" required checked={formData.privacy} onChange={handleChange} />
                <label htmlFor="privacy">Принимаю политику конфиденциальности и.т.д</label>
            </div>
            <div className="contact__form-group">
                <button className='contact__btn' type="submit">Отправить</button>
            </div>
        </form>
    );
};

export default Forma;