import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCursoById, updateCurso } from '../../services/cursoService';
import { FaBook, FaInfoCircle, FaGraduationCap, FaEdit } from 'react-icons/fa';

const EditarCurso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState({ nombre: '', descripcion: '', creditos: 0 });

  useEffect(() => {
    const fetchCurso = async () => {
      const { data } = await getCursoById(id);
      setCurso(data);
    };
    fetchCurso();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCurso(id, curso);
    navigate('/cursos');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg rounded-3">
            <div className="card-header bg-warning text-white text-center">
              <h2><FaEdit className="me-2" /> Editar Curso</h2>
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
                    <FaEdit className="me-2 text-success" /> Créditos
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
                <button type="submit" className="btn btn-warning w-100 text-white">
                  <FaEdit className="me-2" /> Actualizar Curso
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarCurso;
