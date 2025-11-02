'use client';

import React from 'react';

export default function Home() {
  const skills = [
    'Python',
    'VBA (Macros en Excel)',
    'Electronica',
    'SQL',
    'Experiencia en macroempresas',
    'C++',
    'Conocimientos de ciencias basicas de la ingenieria',
    'Experiencia realizando capacitaciones y documentacion orientado a usuarios',
    'Ingles: C1'
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card">
            <img
              src="/foto.jpg"
              alt="Pedro Correa Valdes"
              style={{ width: '100%', borderRadius: '10px', display: 'block' }}
            />
          </div>

          <div className="card">
            <h2 style={{ color: '#1e3a8a', margin: '0 0 1rem 0' }}>⚡ Habilidades</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.8rem',
              }}
            >
              {skills.map(skill => (
                <span
                  key={skill}
                  style={{
                    background: 'linear-gradient(135deg, #1e3a8a, #dc2626)',
                    color: 'white',
                    borderRadius: '8px',
                    minHeight: '4.5rem',
                    padding: '0.5rem',
                    display: 'flex',             
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    wordBreak: 'break-word',
                    overflowWrap: 'anywhere',
                    fontSize: '0.95rem',
                    lineHeight: 1.2,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="card">
            <h2 style={{ color: '#1e3a8a', margin: '0 0 1rem 0' }}>📖 Sobre mi</h2>
            <p style={{ textAlign: 'justify', margin: 0 }}>
              Hola! Mi nombre es Pedro, tengo 22 años, naci en Medellin, Colombia, y este es mi portafolio
              personal. Dentro de este sitio, podran encontrar algunas de mis habilidades principales, proyectos,
              gustos, y como contactarme si les interesa mi perfil.
            </p>
          </div>

          <div className="card">
            <h2 style={{ color: '#1e3a8a', margin: '0 0 1rem 0' }}>🎓 Educación</h2>
            <p style={{ margin: '0.25rem 0' }}><strong>Gimnasio Los Alcazares - Sabaneta, Colombia</strong></p>
            <p style={{ margin: '0.1rem 0' }}>Bachillerato - 2015 a 2020/6</p>
            <p style={{ margin: '0.25rem 0' }}><strong>Universidad EIA - Envigado, Colombia</strong></p>
            <p style={{ margin: '0.1rem 0' }}>Ingenieria Mecatrónica - 2020/7 a 2025</p>
          </div>

          <div className="card">
            <h2 style={{ color: '#1e3a8a', margin: '0 0 1rem 0' }}>💼 Experiencia</h2>
            <p style={{ margin: '0.25rem 0' }}>
              <strong>Practicante de Desarrollo de Producto Importado (DPI)</strong> Industrias Haceb S.A | 2025/1 - 2025/7
            </p>
            <p style={{ textAlign: 'justify', margin: '0.25rem 0' }}>
              Me encargaba de apoyar en todas las tareas relacionadas al desarrollo de productos importados, como lo son la
              realización de despieces, manuales, fichas técnicas de productos y repuestos, comunicación constante con
              proveedores, traducción de documentos, apoyo en laboratorios cuando se requería, entre otros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
