import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  // Estado para almacenar los elementos de la lista
  const [items, setItems] = useState([]);
  // Estado para almacenar el elemento que se está editando
  const [itemToEdit, setItemToEdit] = useState(null);

  // useEffect para cargar los elementos almacenados en localStorage al iniciar la aplicación
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  // useEffect para guardar los elementos en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  // Función para agregar un nuevo elemento o actualizar uno existente
  const addOrUpdateItem = (value) => {
    if (itemToEdit) {
      // Si hay un elemento en edición, se actualiza
      setItems(
        items.map((item) =>
          item.id === itemToEdit.id ? { ...item, value } : item
        )
      );
      setItemToEdit(null); // Se limpia el estado de edición
    } else {
      // Si no hay elemento en edición, se agrega uno nuevo
      setItems([...items, { id: Date.now(), value }]);
    }
  };

  // Función para eliminar un elemento por su id
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Función para establecer un elemento como el que se está editando
  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="App">
      <h1>CRUD con LocalStorage</h1>
      {/* Componente Form para agregar o editar elementos */}
      <Form addOrUpdateItem={addOrUpdateItem} itemToEdit={itemToEdit} />
      {/* Componente List para mostrar los elementos y manejar las acciones de eliminar/editar */}
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
    </div>
  );
}

export default App;
