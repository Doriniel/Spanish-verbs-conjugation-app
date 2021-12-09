import Button from "../../ui/inputs/button/Button";
import Checkbox from "../../ui/inputs/checkbox/Checkbox";
import Radio from "../../ui/inputs/radio/Radio";
import {IconChart} from "../../ui/icons/Icon";
import S from "./Settings.module.css";
import Indicativo from "./indicativo/Indicativo";
import Condicional from "./condicional/Condicional";
import Imperativo from "./imperativo/Imperativo";
import Subjuntivo from "./subjuntivo/Subjuntivo";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { chooseSettings } from "../../redux/actions";
import { useNavigate } from "react-router";
import getRandomIntInclusive from '../../utils/getRandom'

export default function Settings() {
    const [modo, setModo] = useState('Indicativo');
    const [tipoDeVerbo, setTipoDeVerbo] = useState('Regular');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const tiempos = data.getAll('tiempo')
        dispatch(chooseSettings({
            modo:  data.get('modo'),
            tipo: data.get('type'),
            tiempo: tiempos[getRandomIntInclusive(0, tiempos.length - 1)],
        }))
        navigate('/conjugation')
    }
    console.log(modo)
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
                            <Radio value="Indicativo" name="modo" id="indicativo" label="Indicativo" checked={modo === 'Indicativo'} onChange={(e) => setModo(e.target.value)}/>
                        </div>
                        
                        <div>
                            <Radio name="modo" value="Subjuntivo" id="subjuntivo" label="Subjuntivo" checked={modo === 'Subjuntivo'}  onChange={(e) => setModo(e.target.value)}/>
                        </div>
                        <div>
                            <Radio name="modo" value="Imperativo Afirmativo" id="imperativoAfirmativo" label="Imperativo Positivo" checked={modo === 'Imperativo Afirmativo'} onChange={(e) => setModo(e.target.value)}/>
                        </div>
                        <div>
                        <Radio name="modo" value="Imperativo Negativo" id="imperativoNegativo" label="Imperativo Negativo" checked={modo === 'Imperativo Negativo'} onChange={(e) => setModo(e.target.value)}/>
                        </div>

                        {/* <div>
                            <Radio name="modo" value="Indicativo" id="condicional" label="Condicional" checked={modo === 'Condicional'} onChange={(e) => setModo(e.target.value)}/>
                        </div> */}
                    </div>
                    <p className={S.parameter}> Время </p>
                    <div className={S.tiempo}>
                        {modo === 'Indicativo' && <Indicativo />}
                        {modo === 'Subjuntivo' && <Subjuntivo />}
                        {/* {modo === 'Condicional' && <Condicional />} */}
                        {modo === 'Imperativo Afirmativo' && <Imperativo />}
                        {modo === 'Imperativo Negativo' && <Imperativo />}
                    
                    </div>
                    <p className={S.parameter}> Тип глагола </p>
                    <div className={S.type}>
                        <div>
                            <Radio name="type" value="Regular" id="regular" label="Regular" checked={tipoDeVerbo === 'Regular'} onChange={(e) => setTipoDeVerbo(e.target.value)}/>
                        </div>
                        <div>
                            <Radio name="type" value="Irregular" id="irregular" label="Irregular" onChange={(e) => setTipoDeVerbo(e.target.value)} />
                        </div>
                        <div>
                            <Radio name="type" value="Todos" id="todos" label="Todos" onChange={(e) => setTipoDeVerbo(e.target.value)}/>
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