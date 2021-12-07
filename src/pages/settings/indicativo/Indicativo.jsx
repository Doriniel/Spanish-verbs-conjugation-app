import Checkbox from "../../../ui/inputs/checkbox/Checkbox";

export default function Indicativo() {
    return (
        <>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Presente" value='Presente' id="presente" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Presente Progresivo" value='Presente progresivo' id="presenteProgresivo" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Pretérito Perfecto" value="Pretérito perfecto" id="preteritoPerfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Pretérito" value="Pretérito" id="preterito" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Futuro" value="Futuro" id="futuro" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Imperfecto" value="Imperfecto" id="imperfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Pluscuamperfecto" value="Pluscuamperfecto" id="pluscuamperfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Futuro Perfecto" value="Futuro perfecto" id="futuroPerfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="tiempo" label="Pretérito Anterior" value="Pretérito anterior" id="preteritoAnterior" />
            </div>
        </>
    )
}

