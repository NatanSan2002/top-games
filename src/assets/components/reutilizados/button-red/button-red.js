import css from "./button-red.module.css"

function BotaoRED ({texto,strongfont}) {
return(
<button className={`${css.botaoRED} ${css[strongfont]}`}>
{texto}

</button>
)
}


export default BotaoRED;