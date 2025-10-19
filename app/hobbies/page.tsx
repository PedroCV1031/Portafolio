'use client';

export default function Hobbies() {
  const hobbies = [
    {
      id: 1,
      title: "Hobby",
      description: "Descripción del hobby.",
      funFact: "Dato curioso del hobby.",
      image: "https://via.placeholder.com/400x300",
      emoji: ""
    },
    {
      id: 2,
      title: "Hobby",
      description: "Descripción del hobby.",
      funFact: "Dato curioso del hobby.",
      image: "https://via.placeholder.com/400x300",
      emoji: ""
    },
    {
      id: 3,
      title: "Hobby",
      description: "Descripción del hobby.",
      funFact: "Dato curioso del hobby.",
      image: "https://via.placeholder.com/400x300",
      emoji: ""
    },
    {
      id: 4,
      title: "Hobby",
      description: "Descripción del hobby.",
      funFact: "Dato curioso del hobby.",
      image: "https://via.placeholder.com/400x300",
      emoji: ""
    }
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3.5rem', color: 'white', fontWeight: 'bold' }}>
          ✨ Hobbies ✨
        </h1>
        <p style={{ fontSize: '1.3rem', color: 'white', fontStyle: 'italic' }}>
          Actividades favoritas fuera del trabajo 😊
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
        {hobbies.map(hobby => (
          <div key={hobby.id} style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
            border: '3px solid #1e3a8a',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            
            <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>
              {hobby.emoji}
            </div>

            <img 
              src={hobby.image} 
              alt={hobby.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '1.5rem' }}
            />
            
            <h2 style={{ fontSize: '2rem', color: '#1e3a8a', textAlign: 'center' }}>
              {hobby.title}
            </h2>
            <p style={{ textAlign: 'center', color: '#333' }}>
              {hobby.description}
            </p>
            <div style={{ 
              background: 'linear-gradient(135deg, #1e3a8a, #dc2626)',
              color: 'white',
              padding: '1rem',
              borderRadius: '12px',
              textAlign: 'center',
              marginTop: '1rem'
            }}>
              💡 {hobby.funFact}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
