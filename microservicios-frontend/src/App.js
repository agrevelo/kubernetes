import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import ListarUsuarios from './components/Usuarios/ListarUsuarios';
import CrearUsuario from './components/Usuarios/CrearUsuario';
import EditarUsuario from './components/Usuarios/EditarUsuario';
import ListarCursos from './components/Cursos/ListarCursos';
import CrearCurso from './components/Cursos/CrearCurso';
import MatricularUsuario from './components/Cursos/MatricularUsuario';
import UsuariosMatriculados from './components/Cursos/UsuariosMatriculados';
import EditarCurso from './components/Cursos/EditarCurso';

const App = () => (
  <Router>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="card shadow-lg rounded-3">
            <div className="card-header bg-primary text-white text-center">
              <h2>Andrés Revelo</h2>
              <h4>Aplicaciones Distribuidas</h4>
            </div>
            <div className="card-body">
              <Navbar />
              <Routes>
                <Route path="/usuarios" element={<ListarUsuarios />} />
                <Route path="/usuarios/crear" element={<CrearUsuario />} />
                <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
                <Route path="/cursos" element={<ListarCursos />} />
                <Route path="/cursos/crear" element={<CrearCurso />} />
                <Route path="/cursos/editar/:id" element={<EditarCurso />} />
                <Route path="/matricular" element={<MatricularUsuario />} />
                <Route path="/cursos/:id/usuarios" element={<UsuariosMatriculados />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
