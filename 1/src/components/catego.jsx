import { useState } from 'react'
import Styles from '../styles/Categorias.module.css'


//icones
import Catego from '../img/categorias-ico.png'
import Vestido from '../img/categorias/vestido.png'
import VestVerm from '../img/categorias/vestido-vermelho.png'
import ModaMasculina from '../img/categorias/modaMasc.png'
import ModaMasculinaVerm from '../img/categorias/modaMascVermelho.png'
import TelefoniaComu from '../img/categorias/telefoniaEcomu.png'
import TelefoniaComuVermelho from '../img/categorias/telefoniaEcomu-vermelho.png'
import CompuEscri from '../img/categorias/CompEscri.png'
import CompuEscriVermelho from '../img/categorias/CompEscriVermelho.png'

export default function Categorias () {
    

    const [ExibirVest, setExibirVest] = useState(false);
    const [ExibirMasc, setExibirMasc] = useState(false);
    const [ExibirTeleComu, setExibirTeleComu] = useState(false);
    const [ExibirCompuEscri, setExibirCompuEscri] = useState(false);


    return (
        <div className={Styles.categorias_container}>
            <ul>
                <div className={Styles.catego_title}>
                    <img src={Catego} alt="categorias icone" />
                    <h3>Categorias</h3>
                </div>
                
                <li onMouseOver={() => {setExibirVest(true);}} onMouseOut={() => {setExibirVest(false);}}>
                    <span> 
                        <img src={ExibirVest? VestVerm : Vestido} alt="Vestido" /> 
                        <div>
                           <a href="/">Moda Feminina</a> 
                        </div>
                         
                    </span>
                </li>


                <li onMouseOver={() => {setExibirMasc(true);}} onMouseOut={() => {setExibirMasc(false);}}>
                    <span> 
                        <img src={ExibirMasc? ModaMasculinaVerm : ModaMasculina} alt="" />
                        <div>
                           <a href="/">Moda Masculina</a> 
                        </div>
                         
                    </span>
                </li>

                <li onMouseOver={() => {setExibirTeleComu(true);}} onMouseOut={() => {setExibirTeleComu(false);}}>
                    <span>
                    <img src={ExibirTeleComu? TelefoniaComuVermelho : TelefoniaComu} alt="Telefonia e comunicação icone" /> 
                        <div>
                            <a href="/">Telefonia e Comunicação</a> 
                        </div>   
                    </span>
                </li>


                <li onMouseOver={() => {setExibirCompuEscri(true);}} onMouseOut={() => {setExibirCompuEscri(false);}}>
                    <span> 
                        <img src={ExibirCompuEscri ? CompuEscriVermelho : CompuEscri} alt="Computadores e Escritorio icone" />
                        <div>
                            <a href="/">Computadores</a>,<a href="/">Escritorio</a>
                        </div> 
                    </span>
                </li>

                <li>
                    <span> 
                        <div>
                            <a href="/">Eletrônicos</a> 
                        </div>   
                    </span>
                </li>

                <li>
                    <span> 
                        <div>
                            <a href="/">Joias e Relógios</a> 
                        </div>   
                    </span>
                </li>

                <li>
                    <span> 
                        <div>
                            <a href="/">Casa</a>,<a href="/">Pet</a> e <a href="/">Eletrodomésticos</a> 
                        </div>   
                    </span>
                </li>
        
                <li>
                    <span> 
                        <div>
                            <a href="/">Bolsas</a> e <a href="/">Calçados</a> 
                        </div>   
                    </span>
                </li>

                <li>
                    <span> 
                        <div>
                            <a href="/">Brinquedos</a> e <a href="/">Infantil</a> 
                        </div>   
                    </span>
                </li>
                
                <li>
                    <span> 
                        <div>
                            <a href="/">Diversão Ao Ar Livre</a> 
                        </div>   
                    </span>
                </li>
                
                <li>
                    <span> 
                        <div>
                            <a href="/">Saúde</a>,<a href="/">Beleza</a> e <a href="/">Cabelo</a>
                        </div>   
                    </span>
                </li>
                
                <li>
                    <span> 
                        <div>
                            <a href="/">Auto e Moto</a> 
                        </div>   
                    </span>
                </li>
                
                <li>
                    <span> 
                        <div>
                            <a href="/">Ferramentas e Reforma</a> 
                        </div>   
                    </span>
                </li>
                
            </ul>
        </div>
    )
}