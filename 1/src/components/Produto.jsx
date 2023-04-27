import React from 'react'
import Style from '../styles/Produto.module.css'

export default  function Produto ({img, alt, price, discount}) {
  return (
    <div className={Style.produto_container}>
        <div className={Style.produto_img}>
            <div>
                <p>-{discount}</p>
            </div>
            <img src={img} alt={alt} />
        </div>
        <p>R${price}</p>
    </div>
  )
}


