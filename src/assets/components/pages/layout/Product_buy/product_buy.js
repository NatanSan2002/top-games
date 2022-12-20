import { useState, useRef } from "react";

import style from "./product_buy.module.css";

import Button from "../../../reutilizados/button-red/button-red.js";
import Balloon from "../../../reutilizados/balloon/balloon"; // Balão de texto sobre Vip

import star_icon from "../../../../imgs/icons/avaliation_star.png"; // Icon Star 
import fav from "../../../../imgs/icons/heart_icon.png"; // Icon Adicionar lista de Desejos
import card_icon from "../../../../imgs/icons/card_icon.svg"; // Icon Cartão de Crédito
import boleto_icon from "../../../../imgs/icons/boleto_icon.svg"; // Icon Boleto
import payment_options from "../../../../imgs/geral/metodos-pagamentos.png"; // Icon Métodos de Pagamento
import fb_icon from "../../../../imgs/icons/fb_icon.png"; // Icon Facebook
import tt_icon from "../../../../imgs/icons/twitter_icon.png"; // Icon Twitter
import insta_icon from "../../../../imgs/icons/insta_icon.png";  // Icon Instagram 


function ProductBuy({ img, aspect, name, marca, price, descricao, idioma, formato }) {



    const stars = [1, 2, 3, 4, 5];

    const [star, Setstar] = useState(undefined);

    const button_vip1 = useRef(null);
    const button_vip2 = useRef(null);

    const handleChangeButton = (e, trigger) => {


        let btn = e.target.style;

        btn.background = "#434345";
        btn.color = "white";
        btn.transition = "0.4s";
        if (trigger == 1) {
            button_vip2.current.style.background = "none";
            button_vip2.current.style.color = "black";

        } else {
            button_vip1.current.style.background = "none";
            button_vip1.current.style.color = "black";
        }
    }




    return (
        <article className={style.PBuy_Container}>
            <img className={style[aspect]} src={img} alt={`Capa do jogo ${name}`} />
            <div>
                <div className={style.top_div}>
                    <h1> {name}</h1>
                    <p className={style.marca}> Marca: {marca}</p>
                    <div className={style.avaliation}>
                        <div className={style.stars_container}>
                            {stars.map((i) => {
                                return (
                                    <img className={` ${star == undefined || star < i ? "" : style.hover_star}`} src={star_icon} alt="Estrela de Avaliação" onMouseOver={(e) => { Setstar(i) }} />)
                            })} {/*Stars de avaliação */}
                        </div>
                        <p>Avaliar este produto</p>
                    </div>

                    <div className={style.list_desejo}>
                        <img src={fav} alt={"Icon de Coração "} />
                        <p>Adicionar a lista de desejos</p>
                    </div>

                </div>

                <div className={style.mid_div}>
                    <p>Tipo de Licença</p>
                    <div className={style.buttons}>
                        <div>
                            <button ref={button_vip1} onClick={e => handleChangeButton(e, 1)}> Primária Vip
                            </button>
                            <div className={style.ballon_container}>
                                <Balloon text="Licença em perfil PRIMÁRIO, permite que o usuário jogue diretamente do seu usuário pessoal, sem a necessidade de se conectar no perfil do jogo. Sendo possível jogar online e offline, e com re-instalações ilimitadas." />
                            </div>
                        </div>
                        <div>
                            <button ref={button_vip2} onClick={e => handleChangeButton(e, 2)}> Secundaria Vip
                            </button>
                            <div className={style.ballon_container}>
                                <Balloon text="Licença em perfil SECUNDÁRIO permite que o usuário jogue diretamente do usuário do jogo, onde é necessário se conectar no perfil comprado. Sendo possível jogar online e offline, e com re-instalações ilimitadas." />
                            </div>
                        </div>
                    </div>
                    <p className={style.price}>R${price.toString().replace(".", ",")}</p>
                    <div className={style.parcelamento}>
                        <div>
                            <img src={card_icon} alt="Icon Cartão de Crédito" />

                            <p>em <strong>{12}x</strong> de <strong> R$ {(price / 12).toFixed(2).toString().replace(".", ",")}</strong> sem juros</p>
                        </div>
                        <div>
                            <img src={boleto_icon} alt="Icon Boleto" />
                            <p>ou <strong className={style.red}>R$ {(price - (price / 100 * 5)).toFixed(2).toString().replace(".", ",")}</strong> à vista no Pix </p>
                        </div>
                    </div>
                </div>
                <div className={style.bot_div}>

                    <Button texto="Clique para comprar" />

                    <img src={payment_options} alt="Métodos de Pagamento" />

                    <div className={style.share}>
                        <p>compartilhe:</p>
                        <div>
                            <img className={style.vertical} src={fb_icon} alt="Icone Facebook" />
                            <img src={tt_icon} alt="Icone Twitter" />
                            <img src={insta_icon} alt="Icone Instagram" />
                        </div>
                    </div>

                </div>





            </div>
        </article>
    )
}

export default ProductBuy;