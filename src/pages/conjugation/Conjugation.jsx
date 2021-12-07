import S from './Conjugation.module.css';
import Keyboard from '../../ui/inputs/keyboard/Keyboard';
import Button from '../../ui/inputs/button/Button';
import Parameter from '../../components/parameter/Parameter';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/selectors';
import Answer from '../../components/answer/Answer';
import Result from '../../components/results/Result';
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import createVerbsStore from '../../hooks/useVerbsStore';
import loginAnonymous from '../../network/loginAnonymous';
import getRandomIntInclusive from '../../utils/getRandom';

export default function Conjugation() {
    const [infinitive, setInfinitive] = useState('')
    const settings = useSelector(settingsSelector)
    useEffect(async () => {
        const store = createVerbsStore(await loginAnonymous())
        const data = await store.find({mood: modo, tense: tiempo, isRegular: tipo === 'Regular'})
        setInfinitive(data.infinitive)
        console.log(data, data[0, getRandomIntInclusive(0, data.length - 1)])
    }, [])
    if (!settings) return <Navigate  to="/settings" replace={true}/>
    const {modo, tipo, tiempo} = settings
    console.log(infinitive, 32321323)

    return (
        <div className={S.container}>
            <h2 className={S.h2}>Введите правильную форму глагола ниже</h2>
            <div>
                <div>

                </div>
                <table className={S.table}>
                    <tbody>
                    <tr className={S.tableRow}>
                        <th>
                            <Parameter paramKey={'Modo'} style={{backgroundColor: '#18A0FB'}} paramValue={modo} />
                        </th>
                        <th>
                            <Parameter paramKey={'Tiempo'} style={{backgroundColor: '#FF8577'}} paramValue={tiempo}/>
                        </th>
                        <th>
                            <Parameter paramKey={'Tipo de verbo'} style={{backgroundColor: '#C7B9FF'}}  paramValue={tipo}/>
                        </th>
                    </tr>
                    <tr className={S.tableRow}>
                        <td>
                            <Parameter paramKey={'Persona'} style={{backgroundColor: '#3DE959'}} />
                        </td>
                        <td>
                            <Parameter paramKey={'Verbo Infinitivo'} style={{backgroundColor: '#3DE959'}} paramValue={infinitive}/>
                        </td>
                        <td>
                            <Parameter paramKey={'Traducción'} style={{backgroundColor: '#3DE959'}} />
                        </td>
                    </tr>
                    </tbody>
                </table>

            </div>
            <Answer />
            <Keyboard />
            <Button>Проверить </Button>

            <Result />

        </div>
    )
}

// Persona - лицо/род/число - оно генерируется рандомно.
// Verb - Глагол в инфинитиве на испанском, который собственно нужно проспрягать. Глагол генерируется рандомно исходя из параметров, выбранных пользователем.
// Modo - выбранное наклонение.
// Tiempo - выбранное время (если времен было выбрано несколько пользователем, то выводится одно из них в случайном порядке).
// Тип глагола - какой был выбран - рег/ нерег/оба - любой тип.
// Перевод - перевод глагола с испанского на русский (инфинитив). - дополнительная опция для лучшего усвоения языка и запоминания пары глагол (исп) - значение (рус)".
