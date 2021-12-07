import S from './Conjugation.module.css';
import Keyboard from '../../ui/inputs/keyboard/Keyboard';
import Button from '../../ui/inputs/button/Button';
import Parameter from '../../components/parameter/Parameter';


export default function Conjugation() {
    return (
        <div className={S.container}>
            <h2 className={S.h2}>Введите правильную форму глагола ниже</h2>
            <div className={S.containerInner}>

                <Parameter paramKey={'Наклонение/ Modo'}/>
                <Parameter paramKey={'Время/ Tiempo'}/>
                <Parameter paramKey={'Regular/ Irregular'}/>

                <Parameter paramKey={'Кто/ Persona'}/>

                <Parameter paramKey={'Глагол/ Verbo'}/>
                <Parameter paramKey={'Перевод/ Traducción'}/>

            </div>
                <div className={S.answer}>
                    <label> Спряжение
                        <input type="text" />
                    </label>
                </div>
            <Keyboard />
            <Button>Проверить </Button>
        </div>
    )
}

// Persona - лицо/род/число - оно генерируется рандомно.
// Verb - Глагол в инфинитиве на испанском, который собственно нужно проспрягать. Глагол генерируется рандомно исходя из параметров, выбранных пользователем.
// Modo - выбранное наклонение.
// Tiempo - выбранное время (если времен было выбрано несколько пользователем, то выводится одно из них в случайном порядке).
// Тип глагола - какой был выбран - рег/ нерег/оба - любой тип.
// Перевод - перевод глагола с испанского на русский (инфинитив). - дополнительная опция для лучшего усвоения языка и запоминания пары глагол (исп) - значение (рус)".
