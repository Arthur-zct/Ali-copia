import Logo from '../img/Logo.png'
import Style from "../styles/Header.module.css"
import Topo from './Topo'

import Lupa from '../img/lupa.png'

export default function Header() { 
    return (
        <header>
            <div className={Style.topo}>
                <Topo />
            </div>

            <div className={Style.Logo_pesquisa}>
                <img src={Logo} alt="Aliexpress logo"  />
                
                <div>
                    <div className={Style.pesquisa_input}>
                        <input type="text" placeholder='boa tarde'/>
                        <div className={Style.input_img}>
                            <a href="/">
                                <img src={Lupa} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={Style.lista_container}>
                        <ul>
                            <li><a href="/">cilios y</a></li>
                            <li><a href="/">raquete beach tennis</a></li>
                            <li><a href="/">Fones de ouvido via bluetooth</a></li>
                            <li><a href="/">suporte celular carro</a></li>
                            <li><a href="/">microfone sem fio</a></li>
                            <li><a href="/">capa iphone 11</a></li>
                        </ul>
                    </div>
                </div>

                

            </div>

        </header>
    )
};