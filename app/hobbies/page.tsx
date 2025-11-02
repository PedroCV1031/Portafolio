'use client';

export default function Hobbies() {
  const hobbies = [
    {
      id: 1,
      title: "Videojuegos",
      description: "Me encantan los videojuegos desde que tengo conciencia. Algunos de mis generos favoritos son los plataformeros, JRPGs, de carreras, entre otros. Generalmente soy full casual, aunque me he llegado a tomar mas enserio los juegos de carreras",
      funFact: "Algunos de mis juegos favs son Crash Team Racing, Ori and the Will of the Wisps, Super Mario Galaxy, Persona 4 Golden, Astro Bot, Fifa Street y Split Second.",
      image: "/playstation.png",
      emoji: "🎮"
    },
    {
      id: 2,
      title: "Historia y Geografia",
      description: "Siempre me han interesado mucho estos dos temas, y los pongo como un mismo hobby ya que en mi opinion estan altamente relacionados. Puedo pasar horas y horas leyendo info totalmente inutil sobre estos, y ojala mi capacidad de retencion de informacion fuese igual de buena para todo como lo es para estos dos temas",
      funFact: "Se nombrar la gran mayoria de capitales del mundo, identificar todas las banderas y siento mucho interes por conocer paises que el 99.999% del planeta no sabe que existen",
      image: "/geografia.png",
      emoji: "🌍"
    },
    {
      id: 3,
      title: "Deportes",
      description: "Me gusta mucho ver (no hacer) deportes de todo tipo, pero principalmente futbol y automovilismo. Soy hincha acerrimo de Independiente Medellin, y he ido a la gran mayoria de partidos de 2014 en adelante. Por otro lado, me encanta la Indycar, F1 y la Nascar, y la Indy 500 en particular es un evento el cual espero con ansias cada año.",
      funFact: "Mis idolos son Juan Pablo Montoya (a quien vi en Daytona en 2010 en una carrera de Nascar), y German Ezequiel Cano",
      image: "/indy.png",
      emoji: "🏎️"
    },
    {
      id: 4,
      title: "Anime",
      description: "Desde 2018-19, y en especial en la pandemia, empece a meterme de lleno en el mundo del anime y el manga. He visto y leido una cantidad absurda de series en los ultimos años, y ha sido mi principal forma de desestrezarme cuando mas lo necesito. Estoy metido en alguna que otra comunidad online de algunas series, y he ido lentamente construyendo una coleccion de manga.",
      funFact: "Mis animes favoritos son Monogatari, Made in Abyss, Chihayafuru, Sound Euphonium, Mushoku Tensei y Wolf Children; Mientras que mis mangas favoritos son Oyasumi Punpun, Gunsmith Cats y Tokyo Ghoul",
      image: "https://media1.tenor.com/m/HRCdn9z4sp4AAAAd/shinobu-oshino-monogatari.gif",
      emoji: "📺",
      link: "https://myanimelist.net/animelist/PedroCV"
    }
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'white', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Mis Hobbies
        </h1>
        <p style={{ fontSize: '1rem', color: 'white', fontStyle: 'italic' }}>
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
        {hobbies.map(hobby => (
          <div key={hobby.id} className="card" style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.8rem',
              marginBottom: '1rem'
            }}>
              <div style={{ fontSize: '2.5rem' }}>
                {hobby.emoji}
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#1e3a8a', margin: 0 }}>
                {hobby.title}
              </h2>
            </div>

            <img 
              src={hobby.image} 
              alt={hobby.title}
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'contain', 
                borderRadius: '8px', 
                marginBottom: '1rem' 
              }}
            />
            
            <p style={{ 
              lineHeight: '1.5', 
              color: '#333', 
              fontSize: '0.95rem',
              marginBottom: '1rem',
              flexGrow: 1
            }}>
              {hobby.description}
            </p>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #1e3a8a, #dc2626)',
              color: 'white',
              padding: '0.8rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              lineHeight: '1.4'
            }}>
              <strong>💡 Fun Fact:</strong> {hobby.funFact}
            </div>

            {hobby.link && (
              <a 
                href={hobby.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  marginTop: '1rem',
                  background: '#333',
                  color: 'white',
                  padding: '0.6rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: '0.85rem'
                }}
              >
                📋 Ver mi lista completa
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}