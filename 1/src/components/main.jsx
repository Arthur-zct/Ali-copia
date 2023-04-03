import Categorias from './catego';
import Style from '../styles/main.module.css';


export default function Main() {
    return (
        <main>
            <div className={Style.Container}>
                <Categorias/>
                <section className={Style.content}>

                    <div className={Style.img}>-------imagem--------</div>

                    <div className={Style.NovoUsuario}>
                        <div>
                            <h3>Cupom de novo usuario</h3>
                            <p>consiga um item bonus ou cupom</p>
                        </div>
                        <div className={Style.NovoUsu_ofertas}>
                            <button>a</button>
                            <div>foto foto foto</div>
                            <button>a</button>
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