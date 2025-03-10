import axios from 'axios';

const API_URL = 'http://127.0.0.1:53998/api/cursos';

export const getCursos = () => axios.get(API_URL);
export const createCurso = (curso) => axios.post(API_URL, curso);
export const deleteCurso = (id) => axios.delete(`${API_URL}/${id}`);
export const getCursoById = (id) => axios.get(`${API_URL}/${id}`);
export const updateCurso = (id, curso) => axios.put(`${API_URL}/${id}`, curso);
