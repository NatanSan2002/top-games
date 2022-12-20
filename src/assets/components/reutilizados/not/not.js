import css from "./not.module.css";



function Notificacoes({icone,quantidade,cor}) {
return(
<div className={css.Notificacoes}>
<img src={icone}  alt="Icone: Carro de Compras"/> 
<div className={`${css.not} ${css[cor]}`}><span> {quantidade} </span></div>
</div>
)
}

export default Notificacoes;