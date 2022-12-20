import { useState, useEffect, useRef } from "react";

import css from "./Navbar.module.css"

import Notificacoes from "../../reutilizados/not/not"

import PopUp from "../../reutilizados/pop-up/pop_up"
import Contato from "../../../info/contato"

import mobile_menu from "../../../imgs/icons/barras-menu.png"
import logo from "../../../imgs/icons/logo.jpg"
import lupa from "../../../imgs/icons/lupa.svg"
import baloesmsg from "../../../imgs/icons/balao.svg"
import usuario from "../../../imgs/icons/usuario_icone.svg"
import carrinho from "../../../imgs/icons/carrinho.svg"
import fechar from "../../../imgs/icons/x-fechar.png"

import pre_pagos from "../../../imgs/geral/preco-menu.png"
import play from "../../../imgs/geral/play-menu.png"
import switchM from "../../../imgs/geral/switch-menu.png"
import xbox from "../../../imgs/geral/xbox-menu.png"
import xboxS from "../../../imgs/geral/xboxS-menu.png"




function Navbar() {

    const ref_menu = useRef(null)
    const ref_bars = useRef(null)
    const ref_close = useRef(null)


    const menu_ON = (evento) => {
        evento.preventDefault()
        ref_menu.current.style.display = "flex"
        ref_bars.current.style.display = "none"
    }

    const menu_OFF = (evento) => {
        evento.preventDefault()
        ref_menu.current.style.display = "none"
        ref_bars.current.style.display = "flex"
    }


    const [janelasize, Setjanelasize] = useState(window.innerWidth)

    useEffect(() => {
        const TamanhoJanela = () => {
            Setjanelasize(window.innerWidth)
        }

        window.addEventListener("resize", TamanhoJanela)

        if (janelasize > 1086) {
            ref_bars.current.style.display = "none"
            ref_menu.current.style.display = "flex"
        } else {
            ref_menu.current.style.display = "none"
            ref_bars.current.style.display = "flex"

        }

    }, [janelasize])




    return (
        <header className={css.NavbarC}>
            <nav>
                <div ref={ref_bars} className={css.mobile} onClick={menu_ON}>
                    <img src={mobile_menu} alt="Menu Mobile" />
                </div>
                <img className={css.logo} src={logo} alt="Logo Da Loja"></img>
                <div>
                    <div className={css.search}>
                        <input type="text" placeholder="Digite o que você procura" />
                        <img src={lupa} alt="Lupa" />
                    </div>

                    <div className={`${css.actions} ${css.atendimento}`}>
                        <img src={baloesmsg} alt="Icone Baloes" />
                        <p> Central de <strong>Atendimento</strong></p>

                    </div>
                    <div className={css.actions}>
                        <img src={usuario} alt="Icone Usuário" />
                        <p> Entrar ou <strong>Cadastrar</strong> </p>

                    </div>
                    <div className={css.not_container}>
                        <Notificacoes icone={carrinho} quantidade="0" cor="vermelho" />
                    </div>



                </div>
            </nav>
            <div ref={ref_menu} className={css.sub_bar}>

                <div className={`${css.container_sessao} ${css.mobile_subbar}`}>
                    <img src={usuario} alt="Icone: Usuário" />
                    <p>Login ou Cadastre-se</p>
                </div>

                <div className={css.container_sessao}>
                    <img src={pre_pagos} alt="Icone: Cartões Pre-Pagos" />
                    <p>Cartões Pré-Pagos</p>
                </div>
                <div className={css.container_sessao}>
                    <img src={switchM} alt="Icone: Nintendo Switch" />
                    <p>Nintendo Switch</p>
                </div>
                <div className={css.container_sessao}>
                    <img src={play} alt="Icone: Playstation 4" />
                    <p>Playstation 4</p>
                </div>
                <div className={css.container_sessao}>
                    <img src={xbox} alt="Icone: Xbox One" />
                    <p>Xbox One</p>
                </div>
                <div className={css.container_sessao}>
                    <img src={xboxS} alt="Icone: Xbox Series X|S" />
                    <p>Xbox Series X|S</p>
                </div>
                <img ref={ref_close} className={css.fechar} src={fechar} alt="Icone: Fechar Menu" onClick={menu_OFF} />

            </div>
        </header>
    )
}


export default Navbar;