import Styles from '../styles/Categorias.module.css'


export default function Categorias () {
    return (
        <div className={Styles.categorias_container}>
            <ul>
                <h3>Categorias</h3>
                <li><span>Moda Feminina</span></li>
                <li><span>Moda Masculina</span></li>
                <li><span>Telefonia e Comunicação</span></li>
                <li>Abacatr</li>
                <li>Abacatr</li>
                <li>Abacatr</li>
                <li>Abacatr</li>
                <li>Abacatr</li>
            </ul>
        </div>
    )
}