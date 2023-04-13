import React from 'react'
import { useState } from 'react'
import Style from '../styles/Topo.module.css'
import Setinha from '../img/setinha.png'

const Topo = () => {


    const [Exibir, setExibir] = useState(false);
    const [Exibir2, setExibir2] = useState(false);
    const [Exibir3, setExibir3] = useState(false);


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
                <img src={Setinha} alt="a" />
            </a>       
        </div>

        <div>
            <a href="/">
                App
                <img src={Setinha} alt="a" />
            </a>
        </div>

        <div>
            <span>
                <a href="/">
                    brasil/portugues/brl
                    <img src={Setinha} alt="a" />
                </a>
            </span>
            <ul>
                <li></li>
            </ul>
        </div>


        <div>
            <a href="/">
                Lista de desejos
                <img src={Setinha} alt="a" />
            </a>
        </div>

        <div className={Style.conta_container} onMouseOver={() => {setExibir3(true);}} onMouseOut={() => {setExibir3(false);}}>
            <div className={Exibir3 ? Style.exibir : Style.ocultar}>
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