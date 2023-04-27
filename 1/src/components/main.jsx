import Categorias from './catego';
import Style from '../styles/main.module.css';
import Produto from '../components/Produto'

export default function Main() {

    
    
    
    return (
        <main>
            <div className={Style.Container}>
                <Categorias/>
                <section className={Style.content}>

                    <div>
                        <ul className={Style.ImagemPromocional}>
                            <li className={Style.imagem1}>
                                <img src="https://ae01.alicdn.com/kf/Hf1cb2e658ce54f779902bd0d57a1ad43S/221x22.png_.webp" alt="" />
                            </li>
                            <li className={Style.imagem2}>
                                <img src="https://ae01.alicdn.com/kf/H89ab02b8ab3740c4a5af59be4e4a54cbc/321x22.png_.webp" alt="" />
                            </li>
                            <li className={Style.imagem3}>
                                <img src="https://ae01.alicdn.com/kf/H6f30d07d0efa4e89aac0605d6ab46cb8l/145x22.png_.webp" alt="" />
                            </li>
                        </ul>
                    </div>

                    <div className={Style.NovoUsuario_container}>
                        <div>
                            <div className={Style.NovoUso_Topo}>
                                <a href="/">
                                <h3>Cupom de Novo Usuário</h3>
                                <p>Consiga um item bônus ou cupom</p>
                                </a>
                            </div>

                            <div className={Style.NovoUsu_ofertas}>
                                <button>a</button>
                                <div>
                                    <Produto img="https://ae04.alicdn.com/kf/S70390f4b0ec548358afae70784b00a01o.jpg_350x350.jpg_480x480Q90.webp" discount="70%" price="3.300" />
                                </div>
                                <button>a</button>
                            </div>
                        </div>
                    </div>

                    
                    <div className={Style.Bv_Sd}>
                        <div className={Style.BemVindo}>
                            <p>Bem vindo novamente ao Aliexpress</p>
                            <div>
                                <button>Increva-se</button>
                                <button>Acessar</button>
                            </div>
                        </div>


                        <div className={Style.Su_Dels}>
                            <div>
                                <h3>Super<span>Deals</span> </h3>
                                <a href="/">VER MAIS</a>
                            </div>
                            <p>Top products. Inccredible prices</p>
                            <div className={Style.Super_Products}>
                                <div>
                                    FOTO
                                    <div>
                                        <span>Preço</span>
                                    </div>
                                </div>
                                <div>
                                    FOTO
                                    <div>
                                        <span>Preço</span>
                                    </div>
                                </div>
                                <div>
                                    FOTO
                                    <div>
                                        <span>Preço</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </section>
            </div>
{/* Eu posso fazer um componente com os abaixo e colocar os valores ja que são iguais praticamente, só tem que ver o primeiro que o titulo tem duas cores. */}
            <section className={Style.produtos_destacados}>
                    
                <div>
                    <div>
                        <h3>Local Sellers</h3>
                        <a href="/">VER MAIS</a>
                    </div>
                        
                    <p>Entrega expressa direto do Brasil</p>
                        
                    <div>
                        <div>
                            FOTO
                            <div>
                                <span>Preço</span>
                            </div>
                        </div>
                        <div>
                            FOTO
                            <div>
                                <span>Preço</span>
                            </div>
                        </div>
                        <div>
                            FOTO
                            <div>
                                <span>Preço</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div>
                        <h3>Achados da Semana</h3>
                        <a href="/">VER MAIS</a>
                    </div>

                    <p>O menor preço dos ultimos 30 Dias.</p>
                        
                    <div>
                        <div>
                            FOTO
                            <div>
                                <span>Preço</span>
                            </div>
                        </div>
                        <div>
                            FOTO
                            <div>
                                <span>Preço</span>
                            </div>
                        </div>
                        <div>
                            FOTO
                            <div>
                                <span>Preço</span>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            
        </main>
    )
}