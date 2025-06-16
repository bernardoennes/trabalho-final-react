import React from "react";
import styles from "./sobre.module.css";
import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";



const equipe = [
    {
        id : 1,
        nome : "Bernardo",
        cargo : "Pagina do Carrinho" ,
        habilidades: [],
        expertise: "",
        foto : "https://media.discordapp.net/attachments/1334968146393694218/1384234534777913394/file_000000004b78622fa7aef4d4af74ba50.png?ex=6851b05e&is=68505ede&hm=85849e66a97ecd242a5d11d525e08d13224c5f783bc3ffb3040f6d4e02bafc12&=&format=webp&quality=lossless&width=684&height=684",
        link : ""
    },
    {
        id : 2,
        nome : "Nikolas",
        cargo : "Pagina de Cadastro" ,
        habilidades: [],
        expertise: "",
        foto : "https://cdn.discordapp.com/attachments/1334968146393694218/1384238192345219092/file_00000000dcd8622f93a11071a84a5841.png?ex=6851b3c6&is=68506246&hm=72afd75984560084d93ffbbfd5de4307987c8c9a7b1794a8284b5bd1b340e954&",
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
        habilidades: ["Criatividade", "Organização e foco", "Pensamento estratégico", "Autodidatismo"],
        expertise: "Desenvolvimento de páginas com HTML5 semântico e CSS, noções de JavaScript e Java. Criaçã de interfaces criativas e temáticas, explorando cores, tipografias e layouts personalizados com a finalidade de transmitir identidade e estilo em cada projeto.",
        foto : "https://cdn.discordapp.com/attachments/1334968146393694218/1384236750146371606/file_00000000a590622fbda6cd8c827b1e1a.png?ex=6851b26f&is=685060ef&hm=35813f48a1e00cd76fd27c6bb7d5f3079658357eb30f172ffbcdbf123fb2784a&",
        link : ""
    },
    {
        id : 5,
        nome : "João Pedro",
        cargo : "Pagina Sobre" ,
        habilidades: ["Aprendizado Multidisciplinar", "Trabalho em Equipe", "Resiliência", "Proatividade" ],
        expertise: "Desenvolvedor Full Stack em Formação, com forte capacidade de aprendizado, criatividade, resiliência e  compensando a falta de experiência em desenvolvimento de projetos com dedicação e vontade de aprender.",
        foto : "https://media.discordapp.net/attachments/1334968146393694218/1384234535293550807/file_00000000daf061f59704e209d1146d1e.png?ex=6851b05f&is=68505edf&hm=50f04b81aa6715fc24a444245c2ba370209b39c891babe68246fb4d84eb73c6b&=&format=webp&quality=lossless&width=456&height=684",
        link : "https://linkedin.com/in/joão-pedro-dias-rodrigues-27b6801b8"
    },
    {
        id : 6,
        nome : "Paulo Roberto",
        cargo : "Pagina de Perfil",
        habilidades: ["Desenvolvimento Web: HTML5, CSS3", "Frameworks e Bibliotecas: React.js, Bootstrap, Tailwind CSS", "Programação: Java, Python, TypeScript", "Banco de Dados: MySQL, PostgreSQL", "Ferramentas: GitHub"],
        expertise: "Desenvolvimento Front-end Moderno. Experiência com frameworks como React.js e Vue.js, conhecimento em CSS avançado com Tailwind CSS e Bootstrap, capacidade de criar interfaces dinâmicas, responsivas e altamente performáticas.",
        foto : "https://cdn.discordapp.com/attachments/1334968146393694218/1384239757831442634/file_000000005758622fa45d85f8dd5601da.png?ex=6851b53c&is=685063bc&hm=5e35ca19dc70e2deafd915dc35fde67805bc899fcb4033a5844492f993f3d3cb&",
        link :"https://linkedin.com/in/paulorobertodevfull",
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
                            Linkedin
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


