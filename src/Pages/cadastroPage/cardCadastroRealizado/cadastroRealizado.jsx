import styles from './cadastroRealizado.module.css'
import fireVideo from '../../../assets/videos/FlamesVideo.mp4'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function CadastroRealizado({nome, email}){

    const [countdown, setCountdown] = useState(30);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(atual => atual - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            navigate('/login')
        }, 30000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        };
    }, [navigate]);

    return(
        <div className={styles.fireWrapper}>
            <video className={styles.fireBackground} autoPlay muted loop playsInline>
                <source src= {fireVideo}/>
                Seu navegador não suporta vídeo em background.
            </video>

            <div className={styles.fireBackground}></div>
            <div className={styles.card}>
                <img src="https://i.postimg.cc/ZntTM2Sj/image.png" alt="Ícone Dark" className={styles.logo} />
                <h1 className={styles.title}>{nome}</h1>
                <p className={styles.text}>
                    🕯️ <strong>Boas vindas à Irmandade das Sombras Literárias</strong> 🕯️
                    <br /><br />
                    Você cruzou o limiar. Agora é um dos nossos.
                    <br /><br />
                    Prepare-se para mergulhar em páginas que sussurram segredos esquecidos, 
                    histórias que desafiam a sanidade e autores que talvez nunca tenham saído 
                    realmente deste mundo...
                    <br /><br />
                    🔍 Acendemos uma vela digital para você — uma mensagem foi enviada para {email}. 
                    Confira sua caixa de entrada (e os cantos obscuros do spam, onde às vezes os horrores se escondem).
                    <br /><br />
                    Que os Antigos guiem sua leitura.
                    <br />
                    <strong>A jornada começa agora.</strong>
                    <br /><br />
                    <strong>Redirecionando em {countdown} segundos...</strong> ou <span className={styles.link} onClick={() => navigate('/login')}>clique aqui para teleportar agora</span>.
                </p>
            </div>
        </div>
    )
}