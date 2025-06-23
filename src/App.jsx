import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  // Estado para almacenar las evaluaciones
  const [items, setItems] = useState([]);
  // Estado para almacenar la evaluación que se está editando
  const [itemToEdit, setItemToEdit] = useState(null);

  // useEffect para cargar las evaluaciones almacenadas en localStorage al iniciar la aplicación
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // useEffect para guardar las evaluaciones en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Función para agregar una nueva evaluación o actualizar una existente
  const addOrUpdateItem = (newItem) => {
    if (itemToEdit) {
      // Si hay una evaluación en edición, se actualiza
      setItems(
        items.map((item) =>
          item.id === itemToEdit.id ? { ...item, ...newItem } : item
        )
      );
      setItemToEdit(null); // Se limpia el estado de edición
    } else {
      // Si no hay evaluación en edición, se agrega una nueva
      setItems([...items, { id: Date.now(), ...newItem }]);
    }
  };

  // Función para eliminar una evaluación por su id
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Función para establecer una evaluación como la que se está editando
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1>Evaluación de Alumnos</h1>
      {/* Componente Form para agregar o editar evaluaciones */}
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      {/* Componente List para mostrar las evaluaciones y manejar las acciones de eliminar/editar */}
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;
