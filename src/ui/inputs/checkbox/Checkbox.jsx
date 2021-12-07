import S from './Checkbox.module.css';


export default function Checkbox(props) {
    let{name, id, label,  value, checked} = props;

    return (
        <div className={S.containerTiempo}>
            <input name={name} id={id} type="checkbox" value={value} checked={checked}/>
            <label htmlFor={id} className={S.tiempoCheck} >{label}</label>
        </div>
    )
}
