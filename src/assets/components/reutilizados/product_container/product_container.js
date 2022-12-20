import style from "./product_container.module.css";

import BotaoRED from "../button-red/button-red";

import boleto_icon from "../../../imgs/icons/boleto_icon.svg";
import heart_icon from "../../../imgs/icons/heart_icon.png";

function Product({ name, img, price, parcelas }) {



    return (
        <div className={style.Product_Component}>
            <img className={`${style.fav} ${style.hover}`} src={heart_icon} alt="Icon Coração"/>

             {/*Diretorio onde fica as imagens dos jogos *o metodo require() não permite var dentro*/} 
            <img  src={require("../../../imgs/geral/"+img)} alt={`Imagem: ${name}`} />
            <p className={style.title}>{name}</p>
            <p className={style.price}>R$ {price.toString().replace(".",",")}</p>
            <p className={style.parcelas}>em <strong>{parcelas}x</strong> de <strong>R$ {(price / parcelas).toFixed(2).toString().replace(".",",")} </strong> sem juros</p>
            <div>
                <img src={boleto_icon} alt="Icon Boleto Vermelho"/>
                <p className={style.a_vista}>R$ {(price - (price/100 * 5)).toFixed(2).toString().replace(".",",")} à vista no PIX</p>
            </div>
         <div className={ style.hover}>
         <BotaoRED texto={"Comprar"}/>
         </div>

        </div>
    )
}

export default Product;