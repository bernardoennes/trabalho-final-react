import React from "react";
import styles from "./sobre.module.css";


const equipe = [
    {
        id : 1,
        nome : "Bernardo",
        cargo : "Pagina do Carrinho" ,
        habilidades: [],
        expertise: "",
        descricao : "",
        foto : "http"
    },
    {
        id : 2,
        nome : "Nikolas",
        cargo : "Pagina de Cadastro" ,
        habilidades: [],
        expertise: "",
        descricao : "",
        foto : "http"
    },
    {
        id : 3,
        nome : "Karen",
        cargo : "Pagina de Login" ,
        habilidades: [],
        expertise: "",
        descricao : "",
        foto : "http"
    },
    {
        id : 4,
        nome : "Laryssa",
        cargo : "Pagina Home" ,
        habilidades: [],
        expertise: "",
        descricao : "",
        foto : "http"
    },
    {
        id : 5,
        nome : "João Pedro",
        cargo : "Pagina Sobre" ,
        habilidades: ["Jogador de CS", "Piloto de Fuga" ],
        expertise: "Gente boa",
        descricao : "",
        foto : "https://i.pinimg.com/736x/c9/b1/2f/c9b12fd12ec6120cc90b2ea2c9d0cedb.jpg"
    },
    {
        id : 6,
        nome : "Paulo Roberto",
        cargo : "Pagina de Perfil",
        habilidades: [],
        expertise: "",
        descricao : "",
        foto : "http"
    }
];

const Sobre = () => {
    return (
        <div className={styles.sobreContainer}>
            <h1 className={styles.sobreTitulo}>Sobre a Nossa Equipe de Desenvolvimento</h1>
            <div className={styles.equipeGrid}>
                {equipe.map((membro) => (
                    <div key = {membro.id} className={styles.membroCard}> 
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sobre;


