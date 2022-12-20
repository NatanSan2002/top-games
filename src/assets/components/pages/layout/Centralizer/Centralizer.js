import style from "./Centralizer.module.css";

function Centralizer (props) {
return(
<div className={style.Centralizer_Container}>
{props.children}
</div>
)
}

export default Centralizer;