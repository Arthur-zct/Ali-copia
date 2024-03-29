import React from 'react'
import { useState } from 'react'
import Style from '../styles/Topo.module.css'
import Setinha from '../img/setinha.png'
import Celular from '../img/celular.png'
import Brazil from '../img/brasil.png'


const Topo = () => {


    const [Exibir, setExibir] = useState(false);
    const [Exibir2, setExibir2] = useState(false);
    const [Exibir3, setExibir3] = useState(false);
    const [Exibir4, setExibir4] = useState(false);


  return (
    <div className={Style.topo}>
        
        <div className={Style.vendas_container} onMouseOver={() => {setExibir(true);}} onMouseOut={() => {setExibir(false);}}>
         
            <div className={Exibir ? Style.exibir : Style.ocultar}>
                <ul className={Style.ul_venda}>
                    <li>Login do vendedor</li>
                    <li>chines</li>
                    <li>Registro de vendedor não chines</li>
                </ul>
            </div>
            <span className={Style.span_venda} style={Exibir ? {backgroundColor: '#ffff'} : {}}>
                <a href="/">
                    Vender no Aliexpres
                    <img src={Setinha} alt="a" />
                </a> 
            </span>

        </div>

        <div className={Style.ajuda_container} onMouseOver={() => {setExibir2(true);}} onMouseOut={() => {setExibir2(false);}}>
            <div className={Exibir2 ? Style.exibir : Style.ocultar}>
                <ul className={Style.ul_ajuda}>
                    <li>Central de Ajuda</li>
                    <li>Disputas e Recursos</li>
                    <li>Denunciar infração de propriedade intelectual</li>
                </ul>
            </div>   

            <span className={Style.span_ajuda}>
                <a href="/">
                    Ajuda
                    <img src={Setinha} alt="a" />
                </a> 
            </span>

        </div>

        <div>
            <a href="/">
                Proteção ao consumidor
            </a>       
        </div>

        <div className={Style.App}>
            <a href="/">
                <img src={Celular} alt="a" />
                <p>App</p>
            </a>
        </div>

        <div className={Style.local_container} onMouseOver={() => {setExibir3(true);}} onMouseOut={() => {setExibir3(false);}}> 
            <div className={Exibir3 ? Style.exibir : Style.ocultar}>
                <ul className={Style.ul_local}>
                    <li>
                        <div>
                            <p>CEP</p>
                            <input type="text" placeholder='Informar um cep' />
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Enviar para</p>
                            <div className={Style.Enviarpara}>
                                <img src={Brazil} alt="Bandeira do brasil" />
                                <p>Brazil</p>
                            </div>
                            <div className={Style.Enviarpara}>
                                <p>Sao paulo</p>
                            </div>
                            <div className={Style.Enviarpara}>
                                <p>Sao paulo</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Idioma</p>
                            <div className={Style.Enviarpara}>
                                <p>Portugues</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Moeda</p>
                            <div className={Style.Enviarpara}>
                                <p>BRL (Reais)</p>
                            </div>
                        </div>
                    </li>
                    <div className={Style.filtrar}>
                        <p>Filtrar</p>
                    </div>
                </ul> 
            </div>
            <span className={Style.span_local}>
                <a href="/">
                    <div className={Style.local_img}>
                        <img src={Brazil} alt="Bandeira do brasil"/>
                    </div>
                    <p> / Português / BRL</p>
                    <img src={Setinha} alt="a" />
                </a>
            </span>

        </div>


        <div>
            <a href="/">
                Lista de desejos
                <img src={Setinha} alt="a" />
            </a>
        </div>

        <div className={Style.conta_container} onMouseOver={() => {setExibir4(true);}} onMouseOut={() => {setExibir4(false);}}>
            <div className={Exibir4 ? Style.exibir : Style.ocultar}>
                <ul className={Style.ul_conta}>
                    <li>Meus pedidos</li>
                    <li>Minhas moedas</li>
                    <li>Central de mensagens</li> 
                    <li>Pagamento</li>
                    <li>Lista de desejos</li>
                    <li>Minhas lojas favoritas</li>
                    <li>Meus Cupons</li>
                </ul> 
            </div>
            
            <span className={Style.span_conta}>
                <a href="/">
                    Minha conta
                    <img src={Setinha} alt="a" />
                </a>
            </span>

        </div>

    </div>
  )
}

export default Topo