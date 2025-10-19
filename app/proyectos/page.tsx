'use client';

export default function Proyectos() {
  const projects = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción",
      technologies: ["Skill 1", "Skill 2"],
      role: "rol",
      image: "https://via.placeholder.com/400x300",
      demo: "https://url-del-demo",
      github: "https://github.com/usuario/proyecto1"
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Descripción",
      technologies: ["Skill 1", "Skill 2"],
      role: "rol",
      image: "https://via.placeholder.com/400x300",
      demo: "https://url-del-demo",
      github: "https://github.com/usuario/proyecto2"
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Descripción",
      technologies: ["Skill 1", "Skill 2"],
      role: "rol",
      image: "https://via.placeholder.com/400x300",
      demo: "https://url-del-demo",
      github: "https://github.com/usuario/proyecto3"
    },
    {
      id: 4,
      title: "Proyecto 4",
      description: "Descripción",
      technologies: ["Skill 1", "Skill 2"],
      role: "rol",
      image: "https://via.placeholder.com/400x300",
      demo: "https://url-del-demo",
      github: "https://github.com/usuario/proyecto4"
    }
  ];

  return (
    <div>
      <h1 style={{ 
        fontSize: '3rem', 
        marginBottom: '3rem', 
        textAlign: 'center', 
        color: 'white',
        fontWeight: 'bold'
      }}>
        💼 Mis Proyectos
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '2rem' 
      }}>
        {projects.map(project => (
          <div key={project.id} className="card">
            <img 
              src={project.image} 
              alt={project.title}
              style={{ 
                width: '100%', 
                height: '250px', 
                objectFit: 'cover', 
                borderRadius: '8px', 
                marginBottom: '1.5rem' 
              }}
            />
            
            <h2 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '1rem', 
              color: '#1e3a8a' 
            }}>
              {project.title}
            </h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                📝 Descripción
              </h3>
              <p style={{ lineHeight: '1.6', color: '#333' }}>
                {project.description}
              </p>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                🛠️ Tecnologías
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem' 
              }}>
                {project.technologies.map(tech => (
                  <span key={tech} style={{
                    background: '#f0f0f0',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    color: '#333'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                👨‍💻 Mi Rol
              </h3>
              <p style={{ lineHeight: '1.6', color: '#333' }}>
                {project.role}
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                background: 'linear-gradient(135deg, #1e3a8a, #dc2626)',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                flex: 1,
                textAlign: 'center',
                fontWeight: '500'
              }}>
                🚀 Ver Demo
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                background: '#333',
                color: 'white',
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                flex: 1,
                textAlign: 'center',
                fontWeight: '500'
              }}>
                💻 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
