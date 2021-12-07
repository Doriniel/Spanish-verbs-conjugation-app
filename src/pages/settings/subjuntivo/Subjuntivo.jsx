import Checkbox from "../../../ui/inputs/checkbox/Checkbox";

export default function Subjuntivo() {
    return (
        <>
            <div>
                <Checkbox type="checkbox" name="Presente" label="Presente" id="presente" />
            </div>
            <div>
                <Checkbox type="checkbox" name="Imperfecto" label="Imperfecto" id="imperfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="Futuro" label="Futuro" id="futuro" />
            </div>
            <div>
                <Checkbox type="checkbox" name="PreteritoPerfecto" label="Pretérito perfecto" id="preteritoPerfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="Pluscuamperfecto" label="Pluscuamperfecto" id="pluscuamperfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="FuturoPerfecto" label="Futuro perfecto" id="futuroPerfecto" />
            </div>
        </>
    )
}

