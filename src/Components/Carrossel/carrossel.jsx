import { useState, useEffect } from "react";
import styles from './carrossel.module.css';
const banners = [
  {
    image: 'https://i.pinimg.com/736x/29/8a/23/298a23049a2c5bab71b451dc37044b70.jpg',
    alt: 'Corvo 1',
    title: 'Bem-vindo ao Canto do Corvo',
    description: 'Um espaço para explorar histórias envolventes, mundos fantásticos e clássicos atemporais.',
  },
  {
    image: 'https://i.pinimg.com/736x/f4/2b/68/f42b68a8e2414e6196125a980e234b56.jpg',
    alt: 'Corvo 2',
    title: 'Narrativas que Encantam e Intrigam',
    description: 'Dos grandes mestres da literatura gótica às novas vozes da fantasia — descubra sua próxima leitura favorita.',
  },
  {
    image: 'https://cdna.artstation.com/p/assets/images/images/025/712/840/large/flavio-da-costa-war-worlds-rio01a.jpg?1586703667',
    alt: 'Corvo 3',
    title: 'Leve a Magia dos Livros para Casa',
    description: 'Explore nosso acervo e receba conhecimento, emoção e beleza no conforto do seu lar.',
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