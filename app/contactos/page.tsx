'use client';

export default function Contactos() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "vcpedro2003@gmail.com",
      link: "mailto:vcpedro2003@gmail.com",
      color: "#dc2626"
    },
    {
      icon: "📱",
      title: "Teléfono",
      value: "+57 3022184386",
      link: "tel:+573022184386",
      color: "#1e3a8a"
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "@PedroCV1031",
      link: "https://github.com/PedroCV1031",
      color: "#333"
    },
    {
      icon: "🐦",
      title: "Twitter",
      value: "@PedroCV__",
      link: "https://twitter.com/PedroCV__",
      color: "#1DA1F2"
    },
    {
      icon: "📸",
      title: "Instagram",
      value: "@pedrocv1031",
      link: "https://instagram.com/pedrocv1031",
      color: "#E1306C"
    },
    {
      icon: "🎥",
      title: "YouTube",
      value: "PedroCV",
      link: "https://www.youtube.com/@PedroCV",
      color: "#FF0000"
    }
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          color: 'white',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          📬 Contacto
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: 'white',
          fontStyle: 'italic'
        }}>
          ¿Tienes un proyecto en mente? ¡Hablemos! 💬
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {contactInfo.map((contact, index) => (
          <a 
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div 
              className="card" 
              style={{
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>
                {contact.icon}
              </div>
              
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: contact.color,
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                {contact.title}
              </h3>
              
              <p style={{ 
                fontSize: '1.1rem', 
                color: '#666',
                wordBreak: 'break-word'
              }}>
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}