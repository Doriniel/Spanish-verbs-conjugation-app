import Checkbox from "../../../ui/inputs/checkbox/Checkbox";

export default function Imperativo() {
    return (
        <>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Presente Positivo" value="Presente positivo" id="presentePositivo" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Presente Negativo" value="Presente negativo" id="presenteNegativo" />
            </div>
        </>
    )
}

