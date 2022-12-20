import { useState } from "react";

import styles from "./pop_up.module.css"

import BotaoRED from "../button-red/button-red"

import seta from "../../../imgs/icons/seta-direita.png"

import zap_icone from "../../../imgs/icons/whats.png"
import telefone from "../../../imgs/icons/telefone.png"
import email from "../../../imgs/icons/email.png"
import clock from "../../../imgs/icons/relogio.png"

import user_icone from "../../../imgs/icons/usuario-padrao.png"
import plus_icone from "../../../imgs/icons/plus.png"
import box_icone from "../../../imgs/icons/caixa.png"






function PopUp({ contato, login, produto, d1, d2, d3, d4 }) {

    const [product_container, setproduct_container] = useState("");

    return (
        <div className={styles.PopUp}>

            {contato && (
                <div className={styles.contato}>
                    <div className={styles.cima}>
                        <div className={styles.container}>
                            <div>
                                <img src={telefone} alt="Telefone Icone" />
                                <p>Telefone:</p>
                            </div>
                            <span>{d1}</span>
                        </div>

                        <div className={styles.container}>
                            <div>
                                <img src={zap_icone} alt="WhatsAPP Icone" />
                                <p>WhatsApp:</p>
                            </div>
                            <span>{d2}</span>
                        </div>

                        <div className={styles.container}>
                            <div>
                                <img src={email} alt="Email Icone" />
                                <p>Email:</p>
                            </div>
                            <span>{d3}</span>
                        </div>

                    </div>
                    <div className={styles.baixo}>
                        <div className={styles.container}>
                            <div>
                                <img src={clock} alt="Relógio Icone" />
                                <p> Horário de Atendimento:</p>
                            </div>
                            <div className={styles.horarios}>
                                <span> Seg a Sex das 10h às 19h</span>
                                <span> Sab das 10h às 14h</span>
                            </div>
                        </div>
                    </div>
                </div>

            )}





            {login && (
                <div className={styles.login}>
                    <div className={styles.bem_vindo}>
                        <img src={user_icone} alt="Icone do Usuario" />
                        <p> Olá, <strong> Bem-vindo!</strong></p>
                        <BotaoRED texto="Minha Conta" strongfont="strongfont" />
                    </div>

                    <div className={styles.options}>
                        <div>
                            <img src={plus_icone} alt="Icone de Cadastrar" />
                            <p>Cadastrar</p>
                        </div>
                        <div>
                            <img src={user_icone} alt="Icone do Usuario" />
                            <p>Entrar</p>
                        </div>
                        <div>
                            <img src={box_icone} alt="Icone de Meus Pedidos" />
                            <p>Meus Pedidos</p>
                        </div>
                    </div>

                </div>





            )}
            {produto && (

                <div className={`${styles.produto} ${styles[product_container]}`}>
                    <img src={seta} alt="Icone de Seta" className={styles.seta} onClick={() => {
                        product_container == "" ? (setproduct_container("minimize")) : (setproduct_container(""))
                    }} />


                    <div className={styles.container}>
                        <div>
                            <p className={styles.titulo}>{d1}</p>
                            <p > Marca: {d2}</p>
                        </div>

                        <div className={styles.preco}>
                            <h6>R$ {d3.toFixed(2).replace(".", ",")}</h6>
                            <p> em <strong> {12}x </strong> de <strong> R${((d3 / 12)).toFixed(2).replace(".", ",")}</strong> sem juros</p>
                            <p> ou <strong> R$ {((d3 - (d3 / 100 * 5)).toFixed(2).replace(".", ","))}</strong> a vista no Pix </p>
                            <BotaoRED texto={"CLIQUE PARA COMPRAR"} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PopUp;

