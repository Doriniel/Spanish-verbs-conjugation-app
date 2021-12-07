import Button from "../../ui/inputs/button/Button";
import Checkbox from "../../ui/inputs/checkbox/Checkbox";
import Radio from "../../ui/inputs/radio/Radio";
import IconChart from "../../ui/icons/Icon";
import S from "./Settings.module.css";
import Indicativo from "./indicativo/Indicativo";
import Conditional from "./conditional/Conditional";
import Imperativo from "./imperativo/Imperativo";
import Subjuntivo from "./subjuntivo/Subjuntivo";
import { useState } from "react";


export default function Settings() {
    const [indicativo, setIndicativo] = useState(true)
    const [conditional, setConditional] = useState(false)
    const [subjuntivo, setSubjuntivo] = useState(false)
    const [imperativo, setImperativo] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const current = data.get('modo')
    
    }
    return (
        <div className={S.containerBig}>
            <div>
                <IconChart className={S.icon}/>
            </div>
            <div className={S.container}>
                <h2 className={S.h2}>Выберите параметры для спряжения глаголов</h2>
                <form onSubmit={onSubmit}>
                    {/* при наведении на Наклонение показывать перевод на Испанский - Modo */}
                    <p className={S.parameter}> Наклонение </p>
                    <div className={S.modo} >
                        <div>
                            <Radio value="Indicativo" name="modo" checked/>
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
                        {indicativo && <Indicativo />}
                        {conditional && <Conditional />}
                        {imperativo && <Imperativo />}
                        {subjuntivo && <Subjuntivo />}
                    
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