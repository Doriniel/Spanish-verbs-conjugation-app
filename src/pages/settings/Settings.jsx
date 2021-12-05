import Button from "../../ui/inputs/button/Button";
import Checkbox from "../../ui/inputs/checkbox/Checkbox";
import Radio from "../../ui/inputs/radio/Radio";
import IconChart from "../../ui/icons/Icon";
import S from "./Settings.module.css";

export default function Settings() {
    return (
        <div className={S.containerBig}>
            <IconChart />
            <div className={S.container}>
                <h2 className={S.h2}>Выберите параметры для спряжения глаголов</h2>
                <form>
                    {/* при наведении на Наклонение показывать перевод на Испанский - Modo */}
                    <p className={S.parameter}> Наклонение </p>
                    <div className={S.modo} >
                        <div>
                            <Radio value="Indicativo" name="modo" />
                        </div>

                        <div>
                            <Radio name="modo" value="Imperativo" id="imperativo" label="Imperativo" />
                        </div>

                        <div>
                            <Radio name="modo" value="Subjuntivo" id="subjuntivo" label="Subjuntivo" />
                        </div>

                        <div>
                            <Radio name="modo" value="Condicional" id="condicional" label="Condicional" />
                        </div>
                    </div>
                    <p className={S.parameter}> Время </p>
                    <div className={S.tiempo}>
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
                        <div>
                            <Checkbox type="checkbox" name="Condicional" label="Condicional" id="imperfecto" />
                        </div>
                        <div>
                            <Checkbox type="checkbox" name="CondicionalPerfecto" label="Condicional Perfecto" id="imperfecto" />
                        </div>
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
                        <div>
                            <Checkbox type="checkbox" name="PresentePositivo" label="Presente Positivo" id="presentePositivo" />
                        </div>
                        <div>
                            <Checkbox type="checkbox" name="PresenteNegativo" label="Presente Negativo" id="presenteNegativo" />
                        </div>
                    </div>

                    <p className={S.parameter}> Тип глагола </p>
                    <div className={S.type}>
                        <div>
                            <Radio name="type" value="Regular" id="regular" label="Regular" />
                        </div>
                        <div>
                            <Radio name="type" value="Irregular" id="irregular" label="Irregular" />
                        </div>
                        <div>
                            <Radio name="type" value="Todos" id="todos" label="Todos" />
                        </div>
                    </div>
                    <Button>Спрягать</Button>
                </form>
            </div>
        </div>
    )
}

{/* <input type="checkbox" id="scales" name="scales"
checked>
<label for="scales">Scales</label> */}