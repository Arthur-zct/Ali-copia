import Logo from '../img/Logo.png'
import Style from "../styles/header.module.css"


export default function header() {
    return (
        <header>
            <div className={Style.topo}>
                <div>
                    <span>
                        <a href="/">Vender no aliexpress</a>
                        
                    </span>
                    <ul>
                        <li></li>
                    </ul>
                </div>

                <div>
                    <span>
                        <a href="/">Ajuda</a>
                    </span>
                    <ul>
                        <li></li>
                    </ul>
                </div>

                <div>
                    <a href="/">Proteção ao consumidor</a>
                </div>

                <div>
                    <a href="/">App</a>
                </div>

                <div>
                    <span>
                        <a href="/">brasil/portugues/brl</a>
                    </span>
                    <ul>
                        <li></li>
                    </ul>
                </div>

                <div>
                    <a href="/">Lista de desejos</a>
                </div>

                <div>
                    <span>
                        <a href="/">Minha conta</a>
                    </span>
                    <ul>
                        <li></li>
                    </ul>
                </div>

            </div>

            <div className={Style.Logo_pesquisa}>
                <img src={Logo} alt="" style={{height: "40px" }} />
            </div>

        </header>
    )
};