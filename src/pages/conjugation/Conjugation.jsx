import S from './Conjugation.module.css';
import Keyboard from '../../ui/inputs/keyboard/Keyboard';
import Button from '../../ui/inputs/button/Button';

export default function Conjugation() {
    return (
        <div className={S.container}>
            <h2 className={S.h2}>Введите правильную форму глагола ниже</h2>
            <div className={S.containerInner}>
                <div className={S.conjugParams}>
                    <p>Кто/ Persona</p>
                    <p >___Yo____</p>
                </div>
                <div className={S.conjugParams}>
                    <p>Глагол/ Verbo</p>
                    <p>____dormir___</p>
                </div>
                <div className={S.conjugParams}>
                    <p>Наклонение/ Modo</p>
                    <p>_______</p>
                </div>
                <div className={S.conjugParams}>
                    <p>Время/ Tiempo</p>
                    <p>_______</p>
                </div>
                <div className={S.conjugParams}>
                    <p>Тип глагола Regular/ Irregular</p>
                    <p>_______</p>
                </div>
                <div className={S.conjugParams}>
                    <p>Перевод/ Traducción</p>
                    <p>_______</p>
                </div>
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
