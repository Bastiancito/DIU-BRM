import React, { useState } from 'react';
import "../stylesheets/carreras.scss";
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const CARRERAS = {
    INFO: {
        tags: ["tecnologia", "computadores", "futuro"],
        show: ["Ingeniería civil Informática", 1520, "Campus Casa Central Valparaíso", 550, 937, 731.35, 80, 60]
    },
    IDP: {
        tags: ["innovacion", "estilo", "futuro", "manualidad"],
        show: ["Ingeniería Diseño de Productos", 15170, "Campus Casa Central Valparaíso", 540, 937, 731.35, 80, 60]
    },
    INDUSTRIAL: {
        tags: ["tecnologia", "fabrica", "actualidad"],
        show: ["Ingeniería Civil Industrial", 15190, "Campus Casa Central Valparaíso", 570, 950, 761.35, 80, 60]
    },
    ARQUI: {
        tags: ["actualidad", "estilo", "manualidad"],
        show: ["Arquitectura", 15180, "Campus Casa Central Valparaíso", 550, 937, 731.35, 80, 60]
    }
};

const TAGS = ["tecnologia", "computadores", "futuro", "innovacion", "estilo", "fabrica", "actualidad", "manualidad"];

const Carreras = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    
    const handleTag = (tag) => {
        setSelectedTags([tag]);
    };

    const filtrarCarreras = Object.values(CARRERAS).filter((carrera) =>
        selectedTags.length > 0 && carrera.tags.some((tag) => selectedTags.includes(tag))
    );

    const handleSeleccionCarrera = (carrera) => {
        alert(`Seleccionaste ${carrera}`);
    };

    return (
        <div className='carreras__background'>
            <div className="header-line"></div>
            <div className="container">
                <Link to="/home" className="back-button">volver</Link>
                <h1>Explora carreras</h1>
                <div className="filters">
                    {TAGS.map((tag) => (
                        <button
                            key={tag}
                            className={`filter ${selectedTags.includes(tag) ? 'selected' : ''}`}
                            onClick={() => handleTag(tag)}
                        >
                            #{tag}
                        </button>
                    ))}
                    <button className="filter">+</button>
                </div>
                <h2>Tus carreras ideales...</h2>
                {selectedTags.length === 0 ? (
                    <p>Selecciona un tag para ver carreras relacionadas.</p>
                ) : (
                    <div className="ideal-careers">
                        {filtrarCarreras.length > 0 ? (
                            filtrarCarreras.map((career, index) => (
                                <button
                                    key={index}
                                    className="career-button"
                                    onClick={() => handleSeleccionCarrera(career.show[0])}
                                >
                                    {career.show[0]}
                                </button>
                            ))
                        ) : (
                            <p>No se encontraron carreras para los tags seleccionados.</p>
                        )}
                    </div>
                )}
                <div className="info-table">
                    <h3>Información sobre nuestras carreras</h3>
                    {selectedTags.length === 0 || filtrarCarreras.length === 0 ? (
                        <p>Selecciona tags para explorar información sobre carreras.</p>
                    ) : (
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
                                {filtrarCarreras.map((career, index) => (
                                    <tr key={index}>
                                        {career.show.map((data, dataIndex) => (
                                            <td key={dataIndex}>{data}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
            <Footer className='footer' />
        </div>
    );
};

export default Carreras;

