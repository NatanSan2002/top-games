import { useRef, useState, useEffect } from "react";

import style from "./carrosel_products.module.css";

import arrowR from "../../../imgs/icons/seta-direita.png";

import arrowL from "../../../imgs/icons/seta-esquerda.png";

function CarroselProdutos(props) {


    const div_carrosel = useRef(null);
    const [carrosel_hover, setcarrosel_hover] = useState(false);

    const [scroll_num, Setscroll_num] = useState(4); // numero da divisão do container do carrosel, no caso "4"  deixaria o tamanho do pulo por um produto  

    function handleClickLeft() {
        div_carrosel.current.scrollLeft -= div_carrosel.current.offsetWidth / scroll_num;
    }

    function handleClickRight() {
        div_carrosel.current.scrollLeft += div_carrosel.current.offsetWidth / scroll_num;
    }

    const [screenwidth, Setscreenwidth] = useState(window.innerWidth);

    useEffect(() => {
        function ScreenRezise() {
            Setscreenwidth(window.innerWidth);
        }

        window.addEventListener("resize", ScreenRezise);
        if (window.innerWidth >= 1150) {
            Setscroll_num(4);
        } else if (window.innerWidth >= 906) {
            Setscroll_num(3);
        } else {
            Setscroll_num(1);
        }
    }, [screenwidth])

    useEffect(() => {

        if (window.innerWidth > 900 && carrosel_hover == false && window.scrollY > 3333) {
            const interval = setInterval(() => {
                console.log(window.scrollY)
                handleClickRight();
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [screenwidth, carrosel_hover, window.scrollY])

    return (
        <article className={style.CarroselProd_Component}>
            <h6>{props.title}</h6>
            <img src={arrowL} className={style.arrowLeft} alt={"Icon Seta Esquerda"} onClick={handleClickLeft} />
            <img src={arrowR} alt={"Icon Seta Direita"} onClick={handleClickRight} />
            <div ref={div_carrosel} onMouseOver={(e) => setcarrosel_hover(true)} onMouseOut={(e) => setcarrosel_hover(false)}>
                {props.children}
            </div>
        </article>
    )
}

export default CarroselProdutos;