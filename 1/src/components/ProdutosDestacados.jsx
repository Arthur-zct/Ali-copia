import React from 'react'
import Style from '../styles/ProdutosDestacados.module.css'

const ProdutosDestacados = ({Title, Description, Products}) => {
  return (
    <div>
        <div>
            {Title}
            <a href="/">Veja mais</a>
        </div>
        <p>{Description}</p>
        <div>
            <p></p>
        </div>
    </div>
  )
}

export default ProdutosDestacados