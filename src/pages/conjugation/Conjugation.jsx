import S from './Conjugation.module.css';
import Keyboard from '../../ui/inputs/keyboard/Keyboard';
import Button from '../../ui/inputs/button/Button';
import Parameter from '../../components/parameter/Parameter';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/selectors';
import Answer from '../../components/answer/Answer';
import Result from '../../components/results/Result';
import { Navigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import createVerbsStore from '../../hooks/useVerbsStore';
import getRandomIntInclusive from '../../utils/getRandom';
import PersonasMap from '../../utils/personasMap';
import Client from '../../network/loginAnonymous';
import { IconArrow, IconDice } from '../../ui/icons/Icon';

export default function Conjugation() {
    // const [infinitive, setInfinitive] = useState('');
    // const [translate, setTranslate] = useState('');
    const [answer, setAnswer] = useState('');
    const settings = useSelector(settingsSelector);
    const [data, setData] = useState([])
    const [index, setIndex] = useState(0)
    const verb = data[index]

    const infinitive = verb ? verb.infinitive : null
    const translate = verb ? verb.verb_russian : null

    const [isCorrect, setIsCorrect] = useState(null)
    const { modo, tipo, tiempo } = settings ?? {}

    let [persona, setPersona] = useState('');

    const persArr = ['yo', 'tú', 'el', "ella", "Usted", "nosotros", "vosotros", "ellos", "Ustedes"];

    const checkAnswer = () => answer.toLocaleLowerCase() === verb[PersonasMap.get(persona)].toLocaleLowerCase();

    const clear = () => {
        setIsCorrect(null);
        setIndex(getRandomIntInclusive(0, data.length - 1));
        setAnswer('');
    }

    useEffect(() => {
        if (!settings) return;
        setPersona(persArr[getRandomIntInclusive(0, persArr.length - 1)])
    }, [verb])

    useEffect(async () => {

        if (!settings) return;
        const store = createVerbsStore(await Client)
        const isRegular = tipo === 'Todos' ? {} : { isRegular: tipo === 'Regular' }
        const data = await store.find({ mood: modo, tense: tiempo, ...isRegular })
        // let randomNumb = getRandomIntInclusive(0, 8);
        // let randomPersona = persArr[randomNumb];
        // setPersona(randomPersona);

        let randomData = data[getRandomIntInclusive(0, data.length - 1)];
        setData(data)
        setIndex(getRandomIntInclusive(0, data.length - 1))
        console.log(randomData, 'results:', data.length);

    }, [])

    if (!settings) return <Navigate to="/settings" replace={true} />


    return (
        <div className={S.container}>
            <Link to={'/settings'}> <IconArrow className={S.linkBack} />  </Link>

            <h2 className={S.h2}>Введите правильную форму глагола ниже</h2>
            <div>
                <table className={S.table}>
                    <tbody>
                        <tr className={S.tableRow}>
                            <th>
                                <Parameter paramKey={'Modo'} style={{ backgroundColor: '#18A0FB' }} paramValue={modo} />
                            </th>
                            <th className={S.tableCell}>
                                <Parameter paramKey={'Tiempo'} style={{ backgroundColor: '#FF8577' }} paramValue={tiempo} />
                            </th>
                            <th className={S.tableCell}>
                                <Parameter paramKey={'Tipo de verbo'} style={{ backgroundColor: '#C7B9FF' }} paramValue={tipo} />
                            </th>
                        </tr>
                        <tr className={S.tableRow}>
                            <td>
                                <Parameter paramKey={'Persona'} style={{ backgroundColor: '#3DE959' }} paramValue={persona} />
                            </td>
                            <td>
                                <Parameter paramKey={'Verbo Infinitivo'} style={{ backgroundColor: '#3DE959' }} paramValue={infinitive} />
                            </td>
                            <td className={S.tableCell}>
                                <Parameter paramKey={'Traducción'} style={{ backgroundColor: '#3DE959' }} paramValue={translate} />
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div className={S.answerContainer}>
                <Answer answer={answer} onChange={(e) => setAnswer(e.target.value)} />
                <Button type='icon' icon={true} onClick={clear}> <IconDice /> </Button>
            </div>

            <Keyboard onClick={(e) => setAnswer(`${answer}${e.target.value}`)} />
            <div className={S.buttonField}>
                <Button onClick={() => setIsCorrect(checkAnswer())}>Проверить </Button>
                <Button onClick={() => setAnswer(verb[PersonasMap.get(persona)].toLocaleLowerCase())}>Показать ответ </Button>
            </div>

            <Result type="correct" isCorrect={isCorrect} />
            {isCorrect && <Button type="secondary" onClick={clear}>Далее</Button>}

        </div>
    )
}

