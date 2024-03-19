import React from 'react';

function PreguntaFrecuente({ pregunta }) {
  return (
    <div className="PreguntaFrecuente">
      <h3>{pregunta.titulo}</h3>
    </div>
  );
}

export default PreguntaFrecuente;
