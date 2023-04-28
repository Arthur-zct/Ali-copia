import React from 'react'
import Style from '../styles/Produto.module.css'

export default  function Produto ({img, alt, price, discount}) {
  return (
    <a href="/" className={Style.produto_container}>
      <div className={Style.produto_img}>
        
        <img src={img} alt={alt} />
        <p>-{discount}</p>
      </div>

      <p>R$ {price}</p>
    </a>
  )
}


