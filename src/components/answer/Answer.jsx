import S from './Answer.module.css';

export default function Answer(props) {
    let {inputValue} = props;

    return (
        <div className={S.answer}>
            <label> Спряжение </label>
            <input type="text" value={inputValue} className={S.input}/>
        </div>
    )
}