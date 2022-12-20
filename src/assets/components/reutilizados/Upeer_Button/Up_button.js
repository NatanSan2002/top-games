import style from "./Up_button.module.css";

import arrow from "../../../imgs/icons/seta-direita.png";

/* Button para scrollar a pagina até o topo*/

function Up_Button() {
    return (
        <button className={style.Up_Button_Container} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            <img src={arrow} alt="Seta para cima" />
        </button>
    )
}

export default Up_Button