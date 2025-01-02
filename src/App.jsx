import React from 'react';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        
      </header>
      <AppointmentForm />
      <AppointmentList />
    </div>
  );
};

export default App;

