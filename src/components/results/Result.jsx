import S from './Result.module.css'

export default function Result(props) {
    const {isCorrect} = props

    return (
        <div className={S.result}>
            {isCorrect === true &&  <p>Muy bien! Молодец! </p>}
            {isCorrect === false && <p>Неверный ответ ) попытайся снова.</p>}
        </div>
    )
}