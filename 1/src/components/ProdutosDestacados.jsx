import React from 'react'
import Style from '../styles/ProdutosDestacados.module.css'
import Produto from './Produto'

const ProdutosDestacados = ({Title, Description, Products}) => {
//{produto.desconto}
  const Codigo = "Cod.loj"

  function comparar(Cod, preco, precoComCodigo, desconto) {
    if(Cod === Codigo) {
      return (
        <div className={Style.Precocomcodigo}> 
          <p> <span>-R$ {precoComCodigo}</span> </p>
          <p>com código</p>
        </div>
      )
    } else {
      return (
        <div className={Style.Achados_semana}> 
          <p>R$ {preco}</p>
          <div>
            <img src="https://ae01.alicdn.com/kf/H76430522fb7d41d99db9c7d23b0c59396.png" alt="foto" />
            <p>{desconto}</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div className={Style.container}>
        <div className={Style.title}>
            <h3>{Title}</h3>
            <a href="/">Veja mais</a>
        </div>
        <p>{Description}</p>

        <div className={Style.ProductsContainer}>

            {Products.map((produto) => (
              <div className={Style.Product} key={produto.id}> 
                <Produto img={produto.Imagem} alt={produto.descricao}/> 
                {comparar(produto.Codigo, produto.preco, produto.ComCodigo, produto.desconto)}
              </div>
            ))}

        </div>

    </div>
  )
}

export default ProdutosDestacados