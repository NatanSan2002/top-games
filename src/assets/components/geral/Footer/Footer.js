import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"

import { HiOutlineMail } from "react-icons/hi"

import css from "./Footer.module.css"

import pagamentos from "../../../imgs/geral/metodos-pagamentos.png"
import google from "../../../imgs/geral/google-seguro.png"


import dados from "../../../info/contato"

function Footer() {
    return (
        <footer>
            <div className={css.cima}>
                <div className={css.email}>
                    <p>
                        RECEBA NOVIDADES
                    </p>
                    <input type="text" placeholder="Insira seu e-mail" />

                    <button>
                        Assinar
                    </button>


                </div>

                <div className={css.informacoes}>
                    <div>
                        <strong> Categorias</strong>
                        <a href="/">Cartões Pré-Pagos </a>
                        <a href="/">Jogos em Promoção</a>
                        <a href="/">Nintendo Switch</a>
                        <a href="/">Playstation 4</a>
                        <a href="/">Playstation 5 </a>
                        <a href="/"> Pré-Vendas</a>
                        <a href="/">Xbox One </a>
                        <a href="/">Xbox Series X|S</a>
                    </div>

                    <div>
                        <strong> Institucional</strong>
                        <a href="/">Aviso Legal </a>
                        <a href="/"> Dúvidas Frequentes</a>
                        <a href="/">Política de Frete</a>
                        <a href="/">Política de Privacidade</a>
                        <a href="/">Política de Reembolso</a>
                        <a href="/">Política de Vendas</a>
                        <a href="/">Depoimentos</a>
                        <a href="/">Mapa do Site</a>
                    </div>
                    <div>
                        <strong> Minha Conta</strong>
                        <a href="/">Entre em Contato</a>
                        <a href="/">Meus Dados</a>
                        <a href="/">Meus Pedidos</a>
                        <a href="/">Rastrear Pedido</a>
                        <a href="/">Lista de Desejos</a>
                    </div>
                    <div className={css.contato}>
                        <strong>Central de Atendimento</strong>


                        <a href="/">

                            <HiOutlineMail />

                            <p>{dados.email}</p>


                        </a>

                        <a href="/">

                            <FaWhatsapp />

                            <p>{dados.whatsapp}</p>

                        </a>

                        <p>
                            Horário de Atendimento: Seg a Sex das 10hrs as 19hrs Sab das 10hrs as 14hrs
                        </p>



                    </div>

                    <div className={css.redes_sociais}>
                        <strong> Siga nossas Redes</strong>

                        <div>
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </div>

                    </div>
                </div>
            </div>

            <div className={css.pagamento}>
                <div className={css.imagem}>
                    <div >
                        <p> Formas de Pagamento</p>
                        <img src={pagamentos} alt={"Métodos de pagamentos disponiveis"} />
                    </div>

                    <div>
                        <p> Loja Segura</p>
                        <img src={google} alt={"Google Safe"} />

                    </div>
                </div>

                <p className={css.direitos}>
                    Top Games 2022. Todos os direitos reservados - Rua Nome Rua, 9999 - Bairro Nome Bairro - SP - CEP: 00000-000
                </p>
            </div>
        </footer>
    )
}


export default Footer;