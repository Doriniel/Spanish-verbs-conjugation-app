
import S from './Radio.module.css';


export default function Radio(props) {
    
    let {name, value, id = value, label = value, checked, onChange} = props;

    return (
        <div className={S.containerModo}>
            <input name={name} type="radio" value={value} id={id} checked={checked}/>
            <label htmlFor={id} className={S.radioModo}>{label}</label>
        </div>
    )
}


