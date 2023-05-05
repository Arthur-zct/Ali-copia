import Categorias from './catego';
import Style from '../styles/main.module.css';
import Produto from '../components/Produto'
import SetaEsquerda from '../img/seta-esquerda.png'
import SetaDireita from '../img/seta-direita.png'
import Produtosdestacados from './ProdutosDestacados'

export default function Main() {

    const ProdutosDestaque = [ 
        {id: 1, Imagem: "https://ae04.alicdn.com/kf/S70390f4b0ec548358afae70784b00a01o.jpg_350x350.jpg_480x480Q90.webp", descricao: "ssd", desconto: "70%", preco: "100"}, 
        {id: 2, Imagem: "https://ae04.alicdn.com/kf/S3563f812160240b58b0d7c27e8ce647aS.jpg_350x350.jpg_480x480Q90.webp", descricao: "Fone sem fio", desconto: "77%", preco: "16,33"}, 
        {id: 3, Imagem: "https://ae04.alicdn.com/kf/S7e74606524fb44a88cd1bd5d00a13c67y.jpg_350x350.jpg_480x480Q90.webp", descricao: "Relogio", desconto: "70%", preco: "20,30"}, 
        {id: 4, Imagem: "https://ae04.alicdn.com/kf/Sea183c88402241ac8858c92f4c8581c2f.jpg_350x350.jpg_480x480Q90.webp", descricao: "Fones sem fio", desconto: "75%", preco: "26,25"} 
    ];

    const SuperDealsProducts = [ 
        {id: 1, Imagem: "https://ae04.alicdn.com/kf/Sbe5293c4fee14877b924dc68d47ceb249.jpg_480x480Q90.webp", descricao: "ssd", desconto: "70%", preco: "100"}, 
        {id: 2, Imagem: "https://ae04.alicdn.com/kf/S6299397967814e708e4be262d16f7e29D.jpg_480x480Q90.webp", descricao: "Fone sem fio", desconto: "77%", preco: "16,33"}, 
        {id: 3, Imagem: "https://ae04.alicdn.com/kf/Scd7b333f06b842d28c741d8dc27d04fa5.jpg_480x480Q90.webp", descricao: "Relogio", desconto: "70%", preco: "20,30"},  
    ];

    const ProdExclusivoLojas = [
        {id: 1, Imagem: "https://ae01.alicdn.com/kf/Safdd24bc01f5432683e36adae82fcddeE.png_200x200.png_.webp", descricao: "gerador portatil de alimentação", desconto: "60%", ComCodigo: "157.27", Codigo: "Cod.loj", preco: "3000"}, 
        {id: 2, Imagem: "https://ae01.alicdn.com/kf/Scc1bf900e88b4761b569639110be72bep.jpg_200x200Q90.jpg_.webp", descricao: "Relogio", desconto: "20%", ComCodigo: "78.64", Codigo: "Cod.loj", preco: "952,33"}, 
        {id: 3, Imagem: "https://ae01.alicdn.com/kf/S1b94269851904739989d827bbd380fb5Q.jpg_200x200Q90.jpg_.webp", descricao: "Realme FT12 Pro", desconto: "30%", ComCodigo: "422.30", Codigo: "Cod.loj", preco: "2500,30"},  
    ]

    const AchadosSemanaProducts = [
        {id: 1, Imagem: "https://ae04.alicdn.com/kf/S0b1e94dd20cb4f4d898fbf856f7f9f40k.jpg_480x480Q90.webp", descricao: "Smartphone Air ultra", desconto: "51%", Codigo: "Achados.sem", preco: "1567,00"}, 
        {id: 2, Imagem: "https://ae04.alicdn.com/kf/S29a3c2f176434adfb17b59eb3d10747fc.jpg_480x480Q90.webp", descricao: "Gancho de parede de cozinha", desconto: "81%", Codigo: "Achados.sem", preco: "4,98"}, 
        {id: 3, Imagem: "https://ae04.alicdn.com/kf/S4647e47d0558486d8d4afeeb3952f650g.jpg_480x480Q90.webp", descricao: "Super absorvente anti derrapante para cozinha", desconto: "79%", Codigo: "Achados.sem", preco: "13,94"}, 
    ]
    
   
    return (
        <main>
            <div className={Style.Container}>
                <Categorias/>
                
                <section className={Style.content}>

                    <div>
                        <ul className={Style.ImagemPromocional}>
                            <li className={Style.imagem1}>
                                <img src="https://ae01.alicdn.com/kf/Hf1cb2e658ce54f779902bd0d57a1ad43S/221x22.png_.webp" alt="" />
                            </li>
                            <li className={Style.imagem2}>
                                <img src="https://ae01.alicdn.com/kf/H89ab02b8ab3740c4a5af59be4e4a54cbc/321x22.png_.webp" alt="" />
                            </li>
                            <li className={Style.imagem3}>
                                <img src="https://ae01.alicdn.com/kf/H6f30d07d0efa4e89aac0605d6ab46cb8l/145x22.png_.webp" alt="" />
                            </li>
                        </ul>
                    </div>

                    <div className={Style.NovoUsuario_container}>
                        <div>
                            <div className={Style.NovoUso_Topo}>
                                <a href="/">
                                <h3>Cupom de Novo Usuário</h3>
                                <p>Consiga um item bônus ou cupom</p>
                                </a>
                            </div>

                            <div className={Style.NovoUsu_ofertas}>
                                <button className={Style.button_esquerda}><img src={SetaEsquerda} alt="" /></button>
                                <div>
                                    
                                    {ProdutosDestaque.map((produto) => (
                                        <div className={Style.NovoUso_Produtos} key={produto.id}> 
                                           <Produto 
                                                img={produto.Imagem} 
                                                alt={produto.descricao} 
                                                price={produto.preco} 
                                                discount={produto.desconto}
                                            /> 
                                        </div>
                                        
                                    ))}
                                    
                                </div>
                                <button className={Style.button_direita}><img src={SetaDireita} alt="" /></button>
                            </div>
                        </div>
                    </div>

                    
                    
                    <div className={Style.Bv_Superd}>

                        <div className={Style.Bvsuperd_container1}>
                            <div className={Style.Achados_semana}>
                                <a href="/" className={Style.Achados_link}>
                                    <img src="https://ae01.alicdn.com/kf/Hc69569dc4495438288901cbe7ae240e5g.jpg_Q90.jpg_.webp" alt="" />
                                </a>
                            </div>

                            <div className={Style.BemVindo}>
                                <p>Bem vindo novamente ao Aliexpress</p>
                                <div>
                                    <button className={Style.Button_1}>Inscreva-se</button>
                                    <button className={Style.Button_2}>Acessar</button>
                                </div>
                            </div>
                        </div>

                        
                        <div className={Style.SuperD}>
                            <div className={Style.SuperD_title}>
                                <img src="https://ae01.alicdn.com/kf/H7f1fd8c0a5fe43cb8166c370350d846ek/216x42.png_.webp" alt="Super Dels" className={Style.SuperDtitle}/>
                                <a href="/">Veja mais</a>
                            </div>
                            <p>Produtos incriveis por preços imbativeis</p>
                            <div className={Style.SuperDproducts_container}>
                                {SuperDealsProducts.map((produto) => (
                                    <div className={Style.SuperD_products} key={produto.id} >
                                        <Produto img={produto.Imagem} alt={produto.descricao} price={produto.preco} discount={produto.desconto} sold={<p>550 vendido</p>}/>
                                    </div>
                                    
                                ))}
                            </div>
                        </div>                

                        

                    </div>
                    
                </section>
            </div>

            <section className={Style.produtos_destacados}>
                    
                <Produtosdestacados Title="Códigos exclusivos das lojas" Description={"Grandes descontos em itens de destaque"} Products={ProdExclusivoLojas} />
                <Produtosdestacados Title="Achados da Semana" Description={"O menor preço dos ultimos 30 dias"} Products={AchadosSemanaProducts} />

            </section>

            
        </main>
    )
}