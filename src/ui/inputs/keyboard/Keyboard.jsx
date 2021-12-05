import S from './Keyboard.module.css';

export default function keyboard() {
    return (
        <div className={S.keyboard}>
                <button type="button" value="é" className={S.symbol}>é</button>
                <button type="button" value="í" className={S.symbol}>í</button>
                <button type="button" value="á" className={S.symbol}>á</button>
                <button type="button" value="ó" className={S.symbol}>ó</button>
                <button type="button" value="ú" className={S.symbol}>ú</button>
                <button type="button" value="ñ" className={S.symbol}>ñ</button>
        </div>
    )
}