import Checkbox from "../../../ui/inputs/checkbox/Checkbox";

export default function Indicativo() {
    return (
        <>
            <div>
                <Checkbox type="checkbox" name="Presente" label="Presente" id="presente" />
            </div>
            <div>
                <Checkbox type="checkbox" name="PresenteProgresivo" label="Presente Progresivo" id="presenteProgresivo" />
            </div>
            <div>
                <Checkbox type="checkbox" name="PreteritoPerfecto" label="Preterito Perfecto" id="preteritoPerfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="Preterito" label="Preterito" id="preterito" />
            </div>
            <div>
                <Checkbox type="checkbox" name="Futuro" label="Futuro" id="futuro" />
            </div>
            <div>
                <Checkbox type="checkbox" name="Imperfecto" label="Imperfecto" id="imperfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="Pluscuamperfecto" label="Pluscuamperfecto" id="pluscuamperfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="FuturoPerfecto" label="Futuro Perfecto" id="futuroPerfecto" />
            </div>
            <div>
                <Checkbox type="checkbox" name="PreteritoAnterior" label="Preterito Anterior" id="preteritoAnterior" />
            </div>
        </>
    )
}

