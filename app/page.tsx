'use client';

export default function Home() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="card">
          <img src="https://via.placeholder.com/400" alt="Nombre" style={{ width: '100%', borderRadius: '10px' }} />
        </div>

        <div className="card">
          <h2 style={{ color: '#1e3a8a' }}>⚡ Habilidades</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem' }}>
            {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5'].map(skill => (
              <span key={skill} style={{ background: 'linear-gradient(135deg, #1e3a8a, #dc2626)', color: 'white', padding: '0.5rem', borderRadius: '8px', textAlign: 'center' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div className="card">
          <h2 style={{ color: '#1e3a8a' }}>📖 Biografía</h2>
          <p>Texto de biografía.</p>
        </div>

        <div className="card">
          <h2 style={{ color: '#1e3a8a' }}>🎓 Educación</h2>
          <p><strong>Institución</strong></p>
          <p>Programa - Año Inicio / Año Fin</p>
        </div>

        <div className="card">
          <h2 style={{ color: '#1e3a8a' }}>💼 Experiencia</h2>
          <p><strong>Puesto</strong> | Empresa | Año Inicio - Año Fin</p>
          <p>Descripción de las responsabilidades.</p>
        </div>
      </div>
    </div>
  );
}
