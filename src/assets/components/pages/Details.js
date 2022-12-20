import { useEffect, useState, useRef } from "react";

import style from "./Details.module.css";

import Centralizer from "./layout/Centralizer/Centralizer"; // Container Centralizador 
import ProductBuy from "./layout/Product_buy/product_buy"; // Informaçoes Do Produto
import AboutBuy from "./layout/About_Buy/about_buy"; // Informaçoes sobre a compra/garantia 

import PopUp from "../reutilizados/pop-up/pop_up";


import UpButton from "../reutilizados/Upeer_Button/Up_button";


function Details({ img, aspect, name, marca, price, descricao, idioma, formato }) {

    const [windowscroll, Setwindowscroll] = useState(window.scrollY);


    const popup = useRef(null);

    const button_up = useRef(null);

    useEffect(() => {
        function Scrolling() {
            Setwindowscroll(window.scrollY);
        }

        window.addEventListener("scroll", Scrolling);

        if (window.scrollY < 435 || window.innerWidth < 900) {
            popup.current.style.display = "none";
            button_up.current.style.display = "none";

        } else if (window.scrollY > 435) {
            popup.current.style.display = "inline-block";
            button_up.current.style.display = "inline-block";
        }
    }, [windowscroll])

    return (
        <article className={style.Details_component}>
            <div ref={popup} className={style.popup}>
                <PopUp produto={true} d1={name} d2={marca} d3={price} />
            </div>

            <div ref={button_up} className={style.up_button}>
                <UpButton />
            </div>

            <div className={style.folder}>
                <span>{"Top Games"}</span>/
                <span>{"Nintendo Switch"}</span>/
                <span>{"Super Smash Bros. Ultimate - Nintendo Switch - Mídia Digital"}</span>
            </div>  {/* Percuso dos caminhos que o usuário seguiu*/}

            <Centralizer>
                <ProductBuy img={img} aspect={aspect} name={name} marca={marca} price={price} />

                <article className={style.details_extra}>

                    <h6> Detalhes do Produto</h6>
                    <p>{descricao}</p>
                    <div>
                        <p><strong>IDIOMA:</strong>{idioma}</p>
                        <p><strong>FORMATO:</strong>{formato}</p>
                    </div>
                </article>

                <AboutBuy />


            </Centralizer>









        </article>
    )
}

export default Details;