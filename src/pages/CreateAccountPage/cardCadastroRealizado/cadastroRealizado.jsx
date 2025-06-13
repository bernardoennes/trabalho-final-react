import styles from './cadastroRealizado.module.css'

export function CadastroRealizado({nome, email}){
    return(
        <div className={styles.fireWrapper}>
            <div className={styles.fireBackground}></div>
            <div className={styles.card}>
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
                </p>
            </div>
        </div>
    )
}