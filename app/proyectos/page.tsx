'use client';

export default function Proyectos() {
  const projects = [
    {
      id: 1,
      title: "Lavadora de carga superior 22kg",
      description: "Durante mi periodo de practica en Haceb, se apoyo en el desarrollo de la lavadora de 22kg, la cual se espera sea lanzada a finales de 2025 o inicios de 2026.",
      tareas: ["Revision manuales de usuario y servicio", "Desarrollo fichas tecnicas de repuesto", "Capacitaciones con tecnicos", "Comunicacion con el proveedor", "Realizacion del despiece junto a la lista de repuestos", "Traduccion documentos relevantes"],
      role: "Parte del equipo de Desarrollo de producto importado",
      image: "/logo-verde-haceb.jpg"
    },
    {
      id: 2,
      title: "Hovercraft",
      description: "Trabajo realizado para la materia proyecto III del programa de Ingenieria Mecatronica",
      tareas: ["Coliderar el equipo", "Conexiones electricas", "Realizacion documentacion del proyecto", "Desarrollo sistema de direccion"],
      role: "Colider",
      image: "/hovercraft.gif"
    },
    {
      id: 3,
      title: "TutorIA",
      description: "Sitio web desarrollado como proyecto para el curso de etica y responsabilidad social",
      tareas: ["Desarrollador de Frontend y Backend", "Lider del grupo", "Desarrollo documentacion proyecto"],
      image: "/tutoria.png",
      role: "Lider y programador",
      githubFrontend: "https://github.com/PedroCV1031/TutorIA_Frontend",
      githubBackend: "https://github.com/PedroCV1031/TutorIA_Backend",
      video: "https://www.youtube.com/watch?v=EsyxM8z8iuo"
    },
    {
      id: 4,
      title: "Mini app de clima",
      description: "App realizada como parte del curso de ingenieria web",
      tareas: ["Programador", "Realizacion documentacion", "Estructurar el proyecto"],
      role: "Programador",
      image: "/clima.png",
      github: "https://github.com/PedroCV1031/MiniAppClima"
    }
  ];

  return (
    <div>
      <h1 style={{ 
        fontSize: '2.5rem', 
        marginBottom: '2rem', 
        textAlign: 'center', 
        color: 'white',
        fontWeight: 'bold'
      }}>
        💼 Mis Proyectos
      </h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '1.5rem' 
      }}>
        {projects.map(project => (
          <div key={project.id} className="card">
            <div style={{ position: 'relative' }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{ 
                  width: '100%', 
                  height: project.id === 2 ? '350px' : '180px', 
                  objectFit: project.id === 2 ? 'scale-down' : 'contain', 
                  borderRadius: '8px', 
                  marginBottom: '1rem',
                  background: project.id === 1 ? '#c4d82e' : 'transparent'
                }}
              />
              {project.id === 1 && (
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  left: '-40px',
                  background: '#fbbf24',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transform: 'rotate(-8deg)',
                  border: '2px solid #f59e0b',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  color: '#78350f',
                  zIndex: 10
                }}>
                  Uso logo ya que al ser un proyecto en desarrollo es confidencial jijiji
                  <div style={{
                    position: 'absolute',
                    bottom: '-15px',
                    right: '20px',
                    width: '0',
                    height: '0',
                    borderLeft: '15px solid transparent',
                    borderRight: '15px solid transparent',
                    borderTop: '15px solid #fbbf24',
                    transform: 'rotate(20deg)'
                  }}></div>
                </div>
              )}
            </div>
            
            <h2 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '0.8rem', 
              color: '#1e3a8a' 
            }}>
              {project.title}
            </h2>
            
            <div style={{ marginBottom: '0.8rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                📝 Descripción
              </h3>
              <p style={{ lineHeight: '1.5', color: '#333', fontSize: '0.9rem' }}>
                {project.description}
              </p>
            </div>
            
            <div style={{ marginBottom: '0.8rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                🛠️ Tareas
              </h3>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.4rem' 
              }}>
                {project.tareas.map(tech => (
                  <span key={tech} style={{
                    background: '#f0f0f0',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '12px',
                    fontSize: '0.75rem',
                    color: '#333'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.4rem' }}>
                👨‍💻 Mi Rol
              </h3>
              <p style={{ lineHeight: '1.5', color: '#333', fontSize: '0.9rem' }}>
                {project.role}
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              {project.githubBackend && (
                <>
                  <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer" style={{
                    background: '#333',
                    color: 'white',
                    padding: '0.6rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    flex: '1',
                    minWidth: '100px',
                    textAlign: 'center',
                    fontWeight: '500',
                    fontSize: '0.85rem'
                  }}>
                    💻 Frontend
                  </a>
                  <a href={project.githubBackend} target="_blank" rel="noopener noreferrer" style={{
                    background: '#333',
                    color: 'white',
                    padding: '0.6rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    flex: '1',
                    minWidth: '100px',
                    textAlign: 'center',
                    fontWeight: '500',
                    fontSize: '0.85rem'
                  }}>
                    💻 Backend
                  </a>
                  <a href={project.video} target="_blank" rel="noopener noreferrer" style={{
                    background: '#dc2626',
                    color: 'white',
                    padding: '0.6rem 1rem',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    flex: '1',
                    minWidth: '100px',
                    textAlign: 'center',
                    fontWeight: '500',
                    fontSize: '0.85rem'
                  }}>
                    🎥 Video
                  </a>
                </>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  background: '#333',
                  color: 'white',
                  padding: '0.6rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  width: '100%',
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: '0.85rem'
                }}>
                  💻 GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}