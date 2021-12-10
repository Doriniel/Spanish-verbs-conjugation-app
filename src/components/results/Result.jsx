import S from './Result.module.css'
import classNames from 'classnames';

export default function Result(props) {
    const {isCorrect, type = "correct"} = props

    return (
        <div className={classNames(S.result, {[S.correct]: isCorrect === true}, {[S.incorrect]: isCorrect === false})}>
            {isCorrect === true &&  <p>¡Muy bien! Молодец! </p>}
            {isCorrect === false && <p>Неверный ответ. Попытайся снова? </p>}
        </div>
    )   
}