import Checkbox from "../../../ui/inputs/checkbox/Checkbox";

export default function Condicional() {
    return (
        <>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Condicional" value="Condicional" id="condicionalMain" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Condicional Perfecto" value="Condicional perfecto" id="condicionalPerfecto" />
            </div>
        </>
    )
}

