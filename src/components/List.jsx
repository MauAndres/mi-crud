import React from 'react';

function List({ items, deleteItem, editItem }) {
  return (
    <div>
      <h2>Evaluaciones Guardadas</h2>
      {items.map((item) => (
        <div key={item.id} className="evaluation-card">
          {/* Contenedor para el contenido de la evaluación */}
          <div className="evaluation-content">
            <p>
              <strong>Alumno:</strong> {item.nombre}
            </p>
            <p>
              <strong>Asignatura:</strong> {item.asignatura}
            </p>
            <p>
              <strong>Promedio:</strong> {item.promedio}{' '}
              {item.promedio >= 6.0 && <span className="highlight">Destacado</span>}
              {item.promedio < 4.0 && <span className="lowlight">Reprobado</span>}
            </p>
          </div>
          {/* Contenedor para los botones */}
          <div className="evaluation-actions">
            <button onClick={() => editItem(item)} className="edit-button">
              Editar
            </button>
            <button onClick={() => deleteItem(item.id)} className="delete-button">
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;