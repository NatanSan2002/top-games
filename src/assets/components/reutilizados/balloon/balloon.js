import style from "./balloon.module.css";

function Balloon ({text}){
return(
<div className={style.BL_Container}>
<p>
{text}
</p>
</div>
)
}

export default Balloon;