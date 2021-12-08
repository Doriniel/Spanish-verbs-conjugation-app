import S from './Keyboard.module.css';
// import classNames from 'classnames';

export default function keyboard(props) {
    let {onClick} = props;

    return (
        <div className={S.keyboard}>
                <button style={{transform: 'rotate(3deg)'}} type="button" value="é" className={S.symbol} onClick={onClick} >é</button>
                <button style={{transform: 'rotate(-3deg)'}} type="button" value="í" className={S.symbol} onClick={onClick}>í</button>
                <button style={{transform: 'rotate(4deg)'}} type="button" value="á" className={S.symbol} onClick={onClick}>á</button>
                <button style={{transform: 'rotate(-2deg)'}} type="button" value="ó" className={S.symbol} onClick={onClick}>ó</button>
                <button style={{transform: 'rotate(2deg)'}} type="button" value="ú" className={S.symbol} onClick={onClick}>ú</button>
                <button style={{transform: 'rotate(-4deg)'}} type="button" value="ñ" className={S.symbol} onClick={onClick}>ñ</button>
        </div>
    )
}