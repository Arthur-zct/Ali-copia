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
        
        <div className={Style.container} onMouseOver={() => {setExibir(true);}} onMouseOut={() => {setExibir(false);}}>
            <span className={Style.span1}>
                <a href="/">
                    Vender no Aliexpres
                    <img src={Setinha} alt="a" />
                </a> 
            </span>
         
            <div className={Exibir ? Style.exibir : Style.ocultar}>
                <ul className={Style.ul}>
                    <li>tarde</li>
                    <li>dia</li>
                    <li>noite</li>
                </ul>
            </div>         
        </div>

        <div className={Style.container} onMouseOver={() => {setExibir2(true);}} onMouseOut={() => {setExibir2(false);}}>
            <span >
                <a href="/">
                    Ajuda
                    <img src={Setinha} alt="a" />
                </a> 
            </span>
         
            <div className={Exibir2 ? Style.exibir : Style.ocultar}>
                <ul className={Style.ul}>
                    <li>Central de Ajuda</li>
                    <li>Disputas e Recursos</li>
                    <li>Denunciar infração de propriedade intelectual</li>
                </ul>
            </div>         
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

        <div className={Style.container} onMouseOver={() => {setExibir3(true);}} onMouseOut={() => {setExibir3(false);}}>
            <span>
                <a href="/">
                    Minha conta
                    <img src={Setinha} alt="a" />
                </a>
            </span>
            
            <div className={Exibir3 ? Style.exibir : Style.ocultar}>
                <ul className={Style.ul}>
                    <li>tarde</li>
                    <li>tarde</li>
                    <li>tarddde</li> 
                </ul> 
            </div>
            <div className={Style.branco}></div>
        </div>

    </div>
  )
}

export default Topo