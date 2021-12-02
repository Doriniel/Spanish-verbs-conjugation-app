
export default function Checkbox(props) {
    let{name, id, label} = props;

    return (
        <>
            <input name={name} id={id} type="checkbox" />
            <label for={id}>{label}</label>
        </>
    )
}
