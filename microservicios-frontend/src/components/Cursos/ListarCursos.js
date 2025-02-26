import React, { useEffect, useState } from 'react';
import { getCursos, deleteCurso } from '../../services/cursoService';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrashAlt, FaUsers, FaBook } from 'react-icons/fa';

const ListarCursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    const { data } = await getCursos();
    setCursos(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar este curso?')) {
      try {
        await deleteCurso(id);
        fetchCursos(); // Actualizar la lista si se elimina exitosamente
        alert('Curso eliminado correctamente.');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          // Asume que el backend responde con un código 400 y un mensaje claro
          alert('No se puede eliminar el curso porque tiene usuarios matriculados.');
        } else {
          console.error('Error al eliminar el curso:', error);
          alert('No se puede eliminar el curso porque tiene usuarios matriculados.');
        }
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="card shadow-lg rounded-3">
            <div className="card-header bg-primary text-white text-center">
              <h2>
                <FaBook className="me-2" /> Lista de Cursos
              </h2>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-end mb-3">
                <Link to="/cursos/crear" className="btn btn-success">
                  <FaPlus className="me-2" /> Crear Curso
                </Link>
              </div>
              <table className="table table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Créditos</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cursos.map((curso) => (
                    <tr key={curso.id}>
                      <td>{curso.id}</td>
                      <td>{curso.nombre}</td>
                      <td>{curso.descripcion}</td>
                      <td>{curso.creditos}</td>
                      <td>
                        <div className="d-flex gap-2">
                          <Link
                            to={`/cursos/editar/${curso.id}`}
                            className="btn btn-warning btn-sm d-flex align-items-center"
                          >
                            <FaEdit className="me-1" /> Editar
                          </Link>
                          <Link
                            to={`/cursos/${curso.id}/usuarios`}
                            className="btn btn-info btn-sm d-flex align-items-center"
                          >
                            <FaUsers className="me-1" /> Usuarios
                          </Link>
                          <button
                            className="btn btn-danger btn-sm d-flex align-items-center"
                            onClick={() => handleDelete(curso.id)}
                          >
                            <FaTrashAlt className="me-1" /> Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {cursos.length === 0 && (
                <p className="text-center text-muted mt-3">
                  No hay cursos disponibles.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListarCursos;
