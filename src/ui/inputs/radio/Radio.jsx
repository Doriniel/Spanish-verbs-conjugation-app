
import S from './Radio.module.css';


export default function Radio(props) {
    
    let {name, value, id = value, label = value} = props;

    return (
        <div className={S.containerModo}>
            <input name={name} type="radio" value={value} id={id} />
            <label for={id} className={S.radioModo}>{label}</label>
        </div>
    )
}


