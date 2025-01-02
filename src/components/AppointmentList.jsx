import React, { useEffect, useState } from 'react';
import { db, collection, getDocs, deleteDoc, doc } from '../firebase/config.js';  // Importar deleteDoc y doc
import '../App.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'citas'));
        const appointmentsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Error fetching appointments: ", error);
      }
    };

    fetchAppointments();
  }, []);

  // Eliminar cita
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'citas', id));  // Eliminar documento en Firestore
      setAppointments(appointments.filter(appointment => appointment.id !== id));  // Actualizar estado
    } catch (error) {
      console.error("Error deleting appointment: ", error);
    }
  };

  return (
    <div className="cards-container">
      <h2 className="cards-title">Listado de Citas</h2>
      {appointments.length > 0 ? (
        <div className="appointments-list">
          {appointments.map((appointment) => (
            <div className="card" key={appointment.id}>
              <h3 className="card-name">
                {appointment.nombre} {appointment.apellidos}  {/* Unir nombre y apellidos */}
              </h3>
              <p><strong>Especialidad:</strong> {appointment.especialidad}</p>
              <p><strong>Médico:</strong> {appointment.medico}</p>
              <p><strong>Fecha de la Cita:</strong> {appointment.fechaCita}</p>
              <p><strong>Motivo:</strong> {appointment.motivo}</p>
              <div className="card-actions">
                <button className="action-button">Modificar</button>
                <button className="action-button delete" onClick={() => handleDelete(appointment.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay citas registradas</p>
      )}
    </div>
  );
};

export default AppointmentList;
