import styles from './loading.module.css'
import loading from '../../assets/loadingBooks.svg'

export function Loading(){
    return(
        <div className={styles.page}>
            <div className= {styles['loading-container']}>
                <img src={loading} alt="Carregando..." className={`${styles['loading-icon']} ${styles.breathing}`} />
                <p className={styles['loading-text']}>Carregando...</p>
            </div>
        </div>
    );
}