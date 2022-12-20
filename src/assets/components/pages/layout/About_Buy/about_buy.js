import style from "./about_buy.module.css";

import ContainerAbout from "../Container_About/container_about";
import CarroselProdutos from "../../../reutilizados/carrosel_products/carrosel_products";
import Product from "../../../reutilizados/product_container/product_container";

import ps5_controller from "../../../../imgs/geral/two_dualsenses.png";
import fifa23 from "../../../../imgs/geral/fifa23banner2.jpg";
import crash from "../../../../imgs/geral/crashbd.png";
import banner from "../../../../imgs/geral/injustice2_banner.jpg";

import digital_icon from "../../../../imgs/icons/certificado.png";
import safe_icon from "../../../../imgs/icons/seguro.png";
import joystick_icon from "../../../../imgs/icons/controle-generico.png";
import cloud_icon from "../../../../imgs/icons/nuvem.png";

import games from "../../../../info/games";



function AboutBuy() {
    return (
        <article className={style.AboutBuy_Component}>

            <ContainerAbout img={ps5_controller} alt={"Controle PS5"} text={<p> Compre já seu jogo em <strong>Mídia Digital </strong>, com a melhor e mais qualificada loja do mundo gamer.</p>} />

            <ContainerAbout title={<h6> Licença <strong>VIP ONLINE</strong></h6>} text={<> <p>Trabalhamos apenas com licenças <strong> VIP</strong>, online e <strong> PRIMÁRIAS.</strong> </p> <p> Tornando sua experiência ainda melhor, e jogando diretamente do <strong>seu perfil pessoal </strong> , sem desconectes ou limites.</p> </>} />

            <ContainerAbout img={fifa23} alt={"Banner FIFA 23"} title={<h6> Jogo 100%  ONLINE</h6>} text={<p> Todos os nossos jogos são comprados diretamente da <strong> Playstation Store, EShop e Microsoft Store, </strong> a loja oficial de cada console, garantindo assim a melhor precedência possivel para seu jogo em mídia digital.</p>} txt_size="small" />

            <ContainerAbout img={crash} img_vertical={true} alt={"Persongem Crash"} title={<h6>NÃO trabalhamos com liçencas OFFLINE</h6>} text={<p> A Top Games não trabalha com contas OFFLINE, evitando grandes constrangimentos e possiveis <strong> banimentos.</strong> Corra deste tipo de licença!</p>} txt_size="small" />

            <ContainerAbout bck_img={banner} txt_size={"small"} title={<h6>Respeitamos sua <strong>jogatina</strong></h6>}
                text={<p>Todas as contas são criadas e vendidas apenas para o limite máximo de <strong>usuários permitidos (2). </strong>
                    Evitando desconectes e constrangimentos.</p>} padding={"medium"} />

            <article className={style.beneficios}>

                <div className={style.container}>
                    <div>
                        <img src={digital_icon} alt="Icon Licença" />
                        <h6>Digital</h6>
                    </div>
                    <p>Licenças totalmente digitais em perfil, jogue sem desconectes.</p>
                </div>

                <div className={style.container}>
                    <div>
                        <img src={safe_icon} alt="Icon Segurança" />
                        <h6>Seguro</h6>
                    </div>
                    <p>Todos os jogos são 100% originais e adquiridos diretamente com distribuidores oficiais.</p>
                </div>


                <div className={style.container}>
                    <div>
                        <img src={joystick_icon} alt={"Icon Controle"} />
                        <h6>Online</h6>
                    </div>
                    <p>Jogue modos online e offline, sem limites ou restrições.</p>
                </div>

                <div className={style.container}>
                    <div>
                        <img src={cloud_icon} alt={"Icon Nuvem"} />
                        <h6>Re-Instalação</h6>
                    </div>
                    <p>Instale e desinstale seus jogos quantas vezes e quando quiser.</p>
                </div>

            </article>

            <CarroselProdutos title={"Produtos Relacionados"}>
                {/*Dados Do Jogo: nome, preço, parcelas, e imagem(apenas o nome dela)*/}
                <Product name={"Dark Souls 3 - Xbox One - Midia Digital"} price={79.99} parcelas={5} img={"gamebox_inclinado2.jpg"} />

                {
                    games.map(i => {
                        return <Product name={i.name} price={i.price} parcelas={i.parcelas} img={i.image} />
                    })
                }


            </CarroselProdutos>

        </article>
    )
}


export default AboutBuy;