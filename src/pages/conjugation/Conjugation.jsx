import S from './Conjugation.module.css';

export default function Conjugation() {
    return (
        <div className={S.container}>
            <h2 className={S.h2}>Введите правильную форму глагола ниже</h2>
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
            <div className={S.answer}>
                <label> Спряжение
                    <input type="text" />
                </label>
            </div>
            <div className={S.keyboard}>
                <button type="button" value="é" className={S.symbol}>é</button>
                <button type="button" value="í" className={S.symbol}>í</button>
                <button type="button" value="á" className={S.symbol}>á</button>
                <button type="button" value="ó" className={S.symbol}>ó</button>
                <button type="button" value="ú" className={S.symbol}>ú</button>
                <button type="button" value="ñ" className={S.symbol}>ñ</button>
            </div>
        </div>
    )
}

// Persona - лицо/род/число - оно генерируется рандомно.
// Verb - Глагол в инфинитиве на испанском, который собственно нужно проспрягать. Глагол генерируется рандомно исходя из параметров, выбранных пользователем.
// Modo - выбранное наклонение.
// Tiempo - выбранное время (если времен было выбрано несколько пользователем, то выводится одно из них в случайном порядке).
// Тип глагола - какой был выбран - рег/ нерег/оба - любой тип.
// Перевод - перевод глагола с испанского на русский (инфинитив). - дополнительная опция для лучшего усвоения языка и запоминания пары глагол (исп) - значение (рус)".
