import React, { useState } from 'react';
import "../stylesheets/carreras.scss";
import { Link } from 'react-router-dom';


const Carreras = () => {
    //estado para manejar la selección de filtros
    const [selectedFilters, setSelectedFilters] = useState({
        personas: false,
        maquinas: false,
        tecnologia: false,
        computadores: false,
        negocios: false,
        naturaleza: false,
        ayuda: false,
    });

    //función q usamos para alternar la selección de un filtro
    const toggleFilter = (filter) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filter]: !prevFilters[filter]
        }));
    };


    //función q maneja la selección de una carrera
    const handleCareerSelection = (career) => {
        alert(`Seleccionaste ${career}`);
    };

    return (
        <div>
            {/* Línea azul superior */}
            <div className="header-line"></div>

            {/* Contenedor principal */}
            <div className="container">
                {/* Botón de volver en amarillo usando Link */}
                <Link to="/postulaciones" className="back-button">volver</Link>


                {/* Título */}
                <h1>Explora carreras</h1>

                {/* Filtros en rojo */}
                <div className="filters">
                    {Object.keys(selectedFilters).map((filterKey) => (
                        <button
                            key={filterKey}
                            className={`filter ${selectedFilters[filterKey] ? 'selected' : ''}`}
                            onClick={() => toggleFilter(filterKey)}
                        >
                            #{filterKey}
                        </button>
                    ))}
                    <button className="filter">+</button>
                </div>

                {/* Carreras ideales */}
                <h2>Tus carreras ideales...</h2>
                <div className="ideal-careers">
                    <button className="career-button" onClick={() => handleCareerSelection('Ingeniería Civil Informática')}>
                        Ingeniería Civil Informática
                    </button>
                    <button className="career-button" onClick={() => handleCareerSelection('Ingeniería Diseño de Productos')}>
                        Ingeniería Diseño de Productos
                    </button>
                    <button className="career-button" onClick={() => handleCareerSelection('Ingeniería Civil Industrial')}>
                        Ingeniería Civil Industrial
                    </button>
                </div>

                {/* Tabla de información */}
                <div className="info-table">
                    <h3>información sobre nuestras carreras</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Carrera o programa académico</th>
                                <th>Código</th>
                                <th>Campus o Sede en que se imparte</th>
                                <th>Puntaje Ponderado Mínimo de Postulación (*)</th>
                                <th>Puntaje Máximo de Selección 2024</th>
                                <th>Puntaje Mínimo de Selección 2024</th>
                                <th>Vacantes DEMRE 2024</th>
                                <th>Vacantes + MC 2024</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Arquitectura</td>
                                <td>15180</td>
                                <td>Campus Casa Central Valparaíso</td>
                                <td>550</td>
                                <td>937</td>
                                <td>731.35</td>
                                <td>80</td>
                                <td>60</td>
                            </tr>
                            {/* Agrega más filas según sea necesario */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Carreras;
