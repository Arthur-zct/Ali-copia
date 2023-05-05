import React from 'react'
import Style from '../styles/Produto.module.css'

export default  function Produto ({img, alt, price, discount, sold}) {
  return (
    <a href="/" className={Style.produto_container}>
      <div className={Style.produto_img}>
        
        <img src={img} alt={alt} />
        {discount ? <p>-{discount}</p> : ""}
        
      </div>

      {price ? (<p>R$ {price}</p>) : ""}

      {sold ? sold : ""}
    </a>
  )
}


