import React from "react";
import styles from "./sobre.module.css";
import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";



const equipe = [
    {
        id : 1,
        nome : "Bernardo",
        cargo : "Pagina do Carrinho" ,
        habilidades: ["Paciencia", "Criatividade", "Trabalho em equipe", "Resiliência", "Comunicação"],
        expertise: "Desenvolvedor Front-end, apaixonado por criar interfaces intuitivas e funcionais. Sempre em busca de aprender novas tecnologias e melhorar minhas habilidades.",
        foto : "https://ehgomes.com.br/wp-content/uploads/2023/08/Vectorizer.AI-A-Ferramenta-que-Transforma-Imagens-em-Vetores.webp",
        link : ""
    },
    {
        id : 2,
        nome : "Nikolas",
        cargo : "Pagina de Cadastro" ,
        habilidades: [],
        expertise: "",
        foto : "https://i.pinimg.com/236x/22/a5/75/22a5750f86f5bde10e03b89459125bef.jpg",
        link : ""
    },
    {
        id : 3,
        nome : "Karen",
        cargo : "Pagina de Login" ,
        habilidades: [],
        expertise: "",
        foto : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55BQs3HG4jOKTIK_dCrjqu1oxu2uKIXBIwQ&s",
        link : ""
    },
    {
        id : 4,
        nome : "Laryssa",
        cargo : "Pagina Home" ,
        habilidades: [],
        expertise: "",
        foto : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0330A3z25jA3JItydBUQshYqAx11pcyRyw&s",
        link : ""
    },
    {
        id : 5,
        nome : "João Pedro",
        cargo : "Pagina Sobre" ,
        habilidades: ["Jogador de CS", "Piloto de Fuga" ],
        expertise: "Front-end, apaixonado por criar interfaces intuitivas e funcionais (mesmo que as vezes não funcione kkk). Sempre em busca de aprender novas tecnologias e melhorar minhas habilidades.",
        foto : "https://i.pinimg.com/736x/c9/b1/2f/c9b12fd12ec6120cc90b2ea2c9d0cedb.jpg",
        link : "https://linkedin.com/in/joão-pedro-dias-rodrigues-27b6801b8"
    },
    {
        id : 6,
        nome : "Paulo Roberto",
        cargo : "Pagina de Perfil",
        habilidades: [],
        expertise: "",
        foto : "https://static.vecteezy.com/ti/fotos-gratis/t2/42730459-leao-perigo-animal-animais-selvagens-natureza-floresta-foto.jpg",
        link :"",
    }
];

const Sobre = () => {
    return (
        <div>
        <div className={styles.sobreContainer}>
            <Navbar/>
            <h1 className={styles.sobreTitulo}>Magos do Desenvolvimento</h1>
            <div className={styles.equipeGrid}>
                {equipe.map((membro) => (
                    <div key = {membro.id} className={styles.cardMembro}> 
                        <img src={membro.foto} alt={membro.nome} className={styles.membroFoto} />
                        <h2 className={styles.membroNome}>{membro.nome}</h2>
                        <p className={styles.membroCargo}>{membro.cargo}</p>
                        <div className={styles.membroHabilidades}>
                            <h3>Habilidades</h3>
                            <ul>
                                {membro.habilidades.map((hab, index) => (
                                    <li key = {index}>{hab}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.membroExperetise}>
                            <h3>Expertise:</h3>
                            <p>{membro.expertise}</p>
                        </div>
                        <div >
                        <a  className={styles.linkedin}  href={membro.link} target="_blank" rel="noopener noreferrer">
                            Mais informações
                        </a>
                        </div>                                                  
                    </div>
                ))}
            </div>
        </div>
            <Footer />
        </div>
    );
}

export default Sobre;


