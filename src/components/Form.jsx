import React, { useState, useEffect } from 'react';

function Form({ addOrUpdateItem, itemToEdit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    asignatura: '',
    promedio: '',
  });

  // useEffect para cargar los datos de edición en el formulario
  useEffect(() => {
    if (itemToEdit) {
      setFormData(itemToEdit);
    } else {
      setFormData({ nombre: '', asignatura: '', promedio: '' });
    }
  }, [itemToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateItem(formData);
    setFormData({ nombre: '', asignatura: '', promedio: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Alumno:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ej. Juan Perez"
          required
        />
      </div>
      <div>
        <label>Asignatura:</label>
        <input
          type="text"
          name="asignatura"
          value={formData.asignatura}
          onChange={handleChange}
          placeholder="Ej. Matemáticas"
          required
        />
      </div>
      <div>
        <label>Promedio (0.0 - 7.0):</label>
        <input
          type="number"
          name="promedio"
          value={formData.promedio}
          onChange={handleChange}
          placeholder="Ej. 5.5"
          min="0"
          max="7"
          step="0.1"
          required
        />
      </div>
      <button type="submit" className="form-button">
        {itemToEdit ? 'Actualizar Evaluación' : 'Agregar Evaluación'}
      </button>
    </form>
  );
}

export default Form;