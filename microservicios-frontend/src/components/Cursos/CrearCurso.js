import React, { useState } from 'react';
import { createCurso } from '../../services/cursoService';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaInfoCircle, FaGraduationCap, FaPlusCircle } from 'react-icons/fa';

const CrearCurso = () => {
  const [curso, setCurso] = useState({ nombre: '', descripcion: '', creditos: 0 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCurso(curso);
    navigate('/cursos');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg rounded-3">
            <div className="card-header bg-primary text-white text-center">
              <h2><FaGraduationCap className="me-2" /> Crear Curso</h2>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">
                    <FaBook className="me-2 text-primary" /> Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control border-primary"
                    name="nombre"
                    value={curso.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaInfoCircle className="me-2 text-info" /> Descripción
                  </label>
                  <textarea
                    className="form-control border-info"
                    name="descripcion"
                    value={curso.descripcion}
                    onChange={handleChange}
                    rows="3"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    <FaPlusCircle className="me-2 text-success" /> Créditos
                  </label>
                  <input
                    type="number"
                    className="form-control border-success"
                    name="creditos"
                    value={curso.creditos}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  <FaPlusCircle className="me-2" /> Crear Curso
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCurso;
