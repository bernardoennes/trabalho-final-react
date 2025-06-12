import './loading.module.css'
import loading from '../../assets/loadingBooks.svg'

export function Loading(){
    return(
        <div className="loading-container">
            <img src={loading} alt="Carregando..." className="loading-icon" />
            <p>Carregando...</p>
        </div>
    );
}