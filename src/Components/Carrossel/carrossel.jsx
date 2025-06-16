import { useState, useEffect } from "react";
import styles from './carrossel.module.css';
const banners = [
  {
    image: 'https://i.pinimg.com/736x/29/8a/23/298a23049a2c5bab71b451dc37044b70.jpg',
    alt: 'Corvo 1',
    title: 'Bem-vindo ao Refúgio das Sombras',
    description: 'Livros que ecoam nas profundezas da alma — mistério, horror e poesia em cada página.',
  },
  {
    image: 'https://i.pinimg.com/736x/f4/2b/68/f42b68a8e2414e6196125a980e234b56.jpg',
    alt: 'Corvo 2',
    title: 'Histórias que Sussurram na Escuridão',
    description: 'Descubra clássicos góticos, contos macabros e narrativas que arrepiam até o silêncio.',
  },
  {
    image: 'https://cdna.artstation.com/p/assets/images/images/025/712/840/large/flavio-da-costa-war-worlds-rio01a.jpg?1586703667',
    alt: 'Corvo 3',
    title: 'O Conhecimento Está à Espreita',
    description: 'Entre nas sombras. Faça seu pedido e receba o obscuro conforto das palavras em sua morada.',
  },
];


export const Carrossel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.bannerCarousel}>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`${styles.bannerSlide} ${index === currentIndex ? styles.active : ''}`}
        >
          <img src={banner.image} alt={banner.alt} />
          <div className={styles.bannerText}>
            <h1>{banner.title}</h1>
            <p>{banner.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};