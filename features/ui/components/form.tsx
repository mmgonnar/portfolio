// CyberpunkFormCard.jsx
'use client';
import React, { useState } from 'react';

// Importa el CSS personalizado
import '../../../card.css';

function CyberpunkFormCard() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría tu lógica de API/envío de datos
  };

  return (
    <div className="flex justify-center p-8">
      {/* El contenedor con el corte diagonal y el borde izquierdo */}
      <div className="form-container">
        <h2 className="heading">CONTACT US</h2>
        <p className="c1">Your data will be processed confidentially.</p>
        <p className="c2">We will get back to you within 24 hours.</p>

        <form className="form" onSubmit={handleSubmit}>
          {/* Input de Nombre */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Input de Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Textarea de Mensaje */}
          <textarea
            name="message"
            placeholder="Your Message"
            className="textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* Contenedor de Botones (Flexbox) */}
          <div className="button-container">
            <button type="submit" className="send-button">
              SEND MESSAGE
            </button>

            <div className="reset-button-container">
              <button type="reset" className="reset-button">
                RESET
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CyberpunkFormCard;
