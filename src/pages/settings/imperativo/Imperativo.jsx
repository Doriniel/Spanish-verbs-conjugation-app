import Checkbox from "../../../ui/inputs/checkbox/Checkbox";

export default function Imperativo() {
    return (
        <>
            <div>
                <Checkbox type="checkbox" name="PresentePositivo" label="Presente Positivo" id="presentePositivo" />
            </div>
            <div>
                <Checkbox type="checkbox" name="PresenteNegativo" label="Presente Negativo" id="presenteNegativo" />
            </div>
        </>
    )
}

