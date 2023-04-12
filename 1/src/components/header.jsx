import Logo from '../img/Logo.png'
import Style from "../styles/Header.module.css"
import Topo from './Topo'


export default function Header() { 
    return (
        <header>
            <div className={Style.topo}>
                <Topo />
            </div>

            <div className={Style.Logo_pesquisa}>
                <img src={Logo} alt="" style={{height: "40px" }} />
            </div>

        </header>
    )
};