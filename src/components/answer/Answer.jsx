import S from './Answer.module.css';

export default function Answer(props) {
    let { onChange, answer: inputAnswer } = props;

    return (
        <div className={S.answer}>
            <label> Спряжение </label>
            <input placeholder="Напиши ответ здесь" type="text" value={inputAnswer} className={S.input} onChange={onChange}/>
        </div>
    )
}