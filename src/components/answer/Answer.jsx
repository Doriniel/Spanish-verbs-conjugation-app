import S from './Answer.module.css';
import { useState } from 'react';

export default function Answer(props) {
    let {keyboard} = props;
    const [value, setValue] = useState('');

    return (
        <div className={S.answer}>
            <label> Спряжение </label>
            <input type="text" value={value} className={S.input} onChange={(e) => setValue((keyboard) ? e.target.value.concat(keyboard): e.target.value)}/>
            <p className={S.test}>Input value: {value}</p>
            <p className={S.test}>Keyboard symbol: {keyboard}</p>
        </div>
    )
}