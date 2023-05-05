import React from 'react'
import { useState } from 'react';


export default function ListaComponente ({img, imgV, alt, name}) {

  const [Exibir, setExibir] = useState(false)
  return (
    <li onMouseOver={() => {setExibir(true);}} onMouseOut={() => {setExibir(false);}}>
        <span>
          <img src={Exibir ? imgV : img} alt="" />
          
          {name}
          
        </span>
    </li>
  )
}




