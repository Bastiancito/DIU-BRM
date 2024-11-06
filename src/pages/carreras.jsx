import React, { useState } from 'react';
import "../stylesheets/carreras.scss";
import { Link } from 'react-router-dom';
import Footer from '../components/footer';


const Carreras = () => {
    const [selectedFilters, setSelectedFilters] = useState({
        personas: false,
        maquinas: false,
        tecnologia: false,
        computadores: false,
        negocios: false,
        naturaleza: false,
        ayuda: false,
    });

    const toggleFilter = (filter) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filter]: !prevFilters[filter]
        }));
    };


    const handleCareerSelection = (career) => {
        alert(`Seleccionaste ${career}`);
    };

    return (
        <div>
            <div className="header-line"></div>

            <div className="container">
                <Link to="/postulaciones" className="back-button">volver</Link>


                <h1>Explora carreras</h1>

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
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer className='footer' />
        </div>
    );
};

export default Carreras;
