import S from './Keyboard.module.css';
import classNames from 'classnames';

export default function keyboard() {
    return (
        <div className={S.keyboard}>
                <button style={{transform: 'rotate(3deg)'}} type="button" value="é" className={S.symbol}>é</button>
                <button style={{transform: 'rotate(-3deg)'}} type="button" value="í" className={S.symbol}>í</button>
                <button style={{transform: 'rotate(4deg)'}} type="button" value="á" className={S.symbol}>á</button>
                <button style={{transform: 'rotate(-2deg)'}} type="button" value="ó" className={S.symbol}>ó</button>
                <button style={{transform: 'rotate(2deg)'}} type="button" value="ú" className={S.symbol}>ú</button>
                <button style={{transform: 'rotate(-4deg)'}} type="button" value="ñ" className={S.symbol}>ñ</button>
        </div>
    )
}