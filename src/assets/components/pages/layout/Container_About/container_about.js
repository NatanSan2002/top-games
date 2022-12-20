import style from "./container_about.module.css";


// propriedades: title e text, tem que vir ja como tags HTML (p,h6,strong)
// Especificar se a imagem tiver aspect vertical

function ContainerAbout({ img, alt_img, bck_img, img_vertical, title, text, txt_size, padding }) {
    return (
        <div className={style.ContainerAbout_Component}>
            {img ? (
                <div >
                    {img_vertical ? <img className={style.vertical_image} src={img} alt={alt_img} /> :
                        <img src={img} alt={alt_img} />}

                    {bck_img && <img className={style.background} src={bck_img} alt="Imagem fundo" />}
                    <div className={style[txt_size]}>
                        {title}
                        {text}
                    </div>
                </div>
            ) : (

                <div className={`${style.only_text} ${style[txt_size]} ${style[padding]}`}>
                    {bck_img && <img className={style.background} src={bck_img} alt="Imagem fundo" />}
                    {title}
                    {text}
                </div>
            )}
        </div>
    )
}

export default ContainerAbout;