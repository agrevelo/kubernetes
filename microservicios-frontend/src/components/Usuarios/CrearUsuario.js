import React, { useState } from 'react';
import { createUsuario } from '../../services/usuarioService';
import { useNavigate } from 'react-router-dom';

const CrearUsuario = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    creadoEn: '', // Agregar el campo creadoEn
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Crear un nuevo objeto usuario con la fecha actual
      const usuarioConFecha = {
        ...usuario,
        fechaNacimiento: new Date(usuario.fechaNacimiento), // Mantener como objeto Date
        creadoEn: new Date(), // Establecer la fecha y hora actuales
      };
      await createUsuario(usuarioConFecha);
      alert('Usuario creado exitosamente');
      navigate('/usuarios');
    } catch (error) {
      console.error('Error al crear usuario:', error);
      alert('Hubo un error al crear el usuario. Por favor, inténtelo nuevamente.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg rounded-3">
            <div className="card-header bg-primary text-white text-center">
              <h2>Crear Usuario</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={usuario.nombre}
                    onChange={handleChange}
                    placeholder="Ingresa el nombre"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    name="apellido"
                    value={usuario.apellido}
                    onChange={handleChange}
                    placeholder="Ingresa el apellido"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={usuario.email}
                    onChange={handleChange}
                    placeholder="Ingresa el correo electrónico"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Teléfono</label>
                  <input
                    type="text"
                    className="form-control"
                    name="telefono"
                    value={usuario.telefono}
                    onChange={handleChange}
                    placeholder="Ingresa el número de teléfono"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Fecha de Nacimiento</label>
                  <input
                    type="date"
                    className="form-control"
                    name="fechaNacimiento"
                    value={usuario.fechaNacimiento}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success btn-lg">
                    Crear Usuario
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearUsuario;
