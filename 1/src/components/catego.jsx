import Styles from '../styles/Categorias.module.css'
import Li from "./ListaComponente"

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
import Eletronicos from '../img/categorias/Eletronicos.png'
import EletronicosVermelho from '../img/categorias/EletronicosVermelho.png'
import JoiasRe from '../img/categorias/JoiasRelogios.png'
import JoiasReVermelho from '../img/categorias/JoiasRelogiosVermelho.png'
import CPE from '../img/categorias/Casa_pet_ele.png'
import CPEVermelho from '../img/categorias/Casa_pet_eleVermelho.png'
import BolsasCalcados from '../img/categorias/BolsasCalcados.png'
import BolsasCalcadosVermelho from '../img/categorias/BolsasCalcadosVermelho.png'
import BrinquedosInfaltil from '../img/categorias/BinquedosInfantil.png'
import BrinquedosInfaltilVermelho from '../img/categorias/BinquedosInfantilVermelho.png'
import Diversao from '../img/categorias/Diversao.png'
import DiversaoVermelho from '../img/categorias/DiversaoVermelho.png'
import SaudeBeleza from '../img/categorias/SaudeBeleza.png'
import SaudeBelezaVermelho from '../img/categorias/SaudeBelezaVermelho.png'
import AutoMoto from '../img/categorias/AutoMoto.png'
import AutoMotoVermelho from '../img/categorias/AutoMotoVermelho.png'
import Ferramentas from '../img/categorias/Ferramentas.png'
import FerramentasVermelho from '../img/categorias/FerramentasVermelho.png'


export default function Categorias () {
    return (
        <div className={Styles.categorias_container}>
            <ul>
                <div className={Styles.catego_title}>
                    <img src={Catego} alt="categorias icone" />
                    <h3>Categorias</h3>
                </div>
                
                
                <Li img={Vestido} imgV={VestVerm} alt={"Moda feminina icone"} name={(<div><a href="">Moda feminina</a></div>)} />

                <Li img={ModaMasculina} imgV={ModaMasculinaVerm} alt={"Moda masculina icone"} name={(<div><a href="">Moda masculina</a></div>)} />
    
                <Li img={TelefoniaComu} imgV={TelefoniaComuVermelho} alt={"Telefonia e comunicação icone"} name={(<div><a href="">Telefonia e Comunicação</a></div>)} />
                
                <Li img={CompuEscri} imgV={CompuEscriVermelho} alt={"Computadores e Escritorio icone"} name={(<div><a href="/">Computadores</a>,<a href="/">Escritorio</a></div>)} />

                <Li img={Eletronicos} imgV={EletronicosVermelho} alt={"Eletronicos icone"} name={(<div><a href="/">Eletrônicos</a></div>)} />

                <Li img={JoiasRe} imgV={JoiasReVermelho} alt={"Joias e relogios icone"} name={(<div><a href="/">Joias e Relógios</a></div>)} />
                
                <Li img={CPE} imgV={CPEVermelho} alt={"Casa pet e eletrodomesticos icone"} name={(<div><a href="/">Casa</a>,<a href="/">Pet</a> e <a href="/">Eletrodomésticos</a></div>)} />

                <Li img={BolsasCalcados} imgV={BolsasCalcadosVermelho} alt={"Bolsas e calçados icone"} name={(<div><a href="/">Bolsas</a> e <a href="/">Calçados</a></div>)} />

                <Li img={BrinquedosInfaltil} imgV={BrinquedosInfaltilVermelho} alt={"Brinquedos e infantil icone"} name={(<div><a href="/">Brinquedos</a> e <a href="/">Infantil</a></div>)} />
            
                <Li img={Diversao} imgV={DiversaoVermelho} alt={"Diversão ao ar livre icone"} name={(<div><a href="/">Diversão Ao Ar Livre</a></div>)} />
                
                <Li img={SaudeBeleza} imgV={SaudeBelezaVermelho} alt={"Saude, beleza e cabelo icone"} name={(<div><a href="/">Saúde</a>,<a href="/">Beleza</a> e <a href="/">Cabelo</a></div>)} />
                
                <Li img={AutoMoto} imgV={AutoMotoVermelho} alt={"Auto e moto icone"} name={(<div><a href="/">Auto e Moto</a></div>)} />
                
                <Li img={Ferramentas} imgV={FerramentasVermelho} alt={"Ferramentas e reforma icone"} name={(<div><a href="/">Ferramentas e Reforma</a></div>)} />
                    
            </ul>
        </div>
    )
}