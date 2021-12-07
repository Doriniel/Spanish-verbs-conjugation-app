import Checkbox from "../../../ui/inputs/checkbox/Checkbox";

export default function Subjuntivo() {
    return (
        <>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Presente" value="Presente" id="presente" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Imperfecto" value="Imperfecto" id="imperfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Futuro" value="Futuro" id="futuro" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Pretérito perfecto" value="Pretérito perfecto" id="preteritoPerfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Pluscuamperfecto"  value="Pluscuamperfecto" id="pluscuamperfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Futuro perfecto" value="Futuro perfecto" id="futuroPerfecto" />
            </div>
        </>
    )
}

