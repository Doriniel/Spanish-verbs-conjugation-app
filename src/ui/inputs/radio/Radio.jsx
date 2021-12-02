
export default function Radio(props) {
    
    let {name, value, id = value, label = value} = props;

    return (
        <>
            <label for={id}>{label}</label>
            <input name={name} type="radio" value={value} id={id} />
        </>
    )
}


