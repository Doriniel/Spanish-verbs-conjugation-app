import S from './Checkbox.module.css';


export default function Checkbox(props) {
    let{name, id, label} = props;

    return (
        <div className={S.containerTiempo}>
            <input name={name} id={id} type="checkbox"/>
            <label for={id} className={S.tiempoCheck} >{label}</label>
        </div>
    )
}
