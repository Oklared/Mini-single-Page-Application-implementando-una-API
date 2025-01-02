import React, { useState } from 'react';
import { db } from '../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import '../App.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    fechaNacimiento: '',
    genero: '',
    direccion: '',
    fechaCita: '',
    especialidad: '',
    medico: '',
    motivo: '',
  });

  // Maneja el cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.fechaCita || !formData.especialidad) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    try {
      await addDoc(collection(db, 'citas'), formData);
      alert('Cita registrada correctamente');
      setFormData({
        nombre: '',
        apellidos: '',
        fechaNacimiento: '',
        genero: '',
        fechaCita: '',
        especialidad: '',
        medico: '',
        motivo: '',
      });
    } catch (error) {
      console.error('Error al registrar cita: ', error);
      alert('Error al registrar la cita');
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        {/* Datos Personales */}
        <div className="form-section">
          <h2 className="section-title">Datos Personales</h2>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre del paciente"
            />
          </div>
          <div className="form-group">
            <label>Apellidos</label>
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              placeholder="Apellidos"
            />
          </div>
          <div className="form-group">
            <label>Fecha de nacimiento</label>
            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Género</label>
            <input
              type="text"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              placeholder="Género"
            />
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="divider"></div>

        {/* Información de Cita (Disposición dinámica) */}
        <div className="form-section">
          <h2 className="section-title">Información de Cita</h2>
          <div className="form-group">
            <label>Fecha de la cita</label>
            <input
              type="date"
              name="fechaCita"
              value={formData.fechaCita}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Especialidad Médica</label>
            <input
              type="text"
              name="especialidad"
              value={formData.especialidad}
              onChange={handleChange}
              placeholder="Especialidad Médica"
            />
          </div>
          <div className="form-group">
            <label>Médico Especialista</label>
            <input
              type="text"
              name="medico"
              value={formData.medico}
              onChange={handleChange}
              placeholder="Médico Especialista"
            />
          </div>
          <div className="form-group">
            <label>Motivo de consulta</label>
            <input
              type="text"
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              placeholder="Motivo de consulta"
            />
          </div>
        </div>

        {/* Botón de Enviar */}
        <div className="form-group">
          <button type="submit" className="submit-btn">Registrar Cita</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
