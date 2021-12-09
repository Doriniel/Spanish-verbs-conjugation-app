import S from './Button.module.css';
import classNames from 'classnames';

export default function Button(props) {
    let{children, onClick, type="primary", icon=false, disabled} = props;
    return (
        <>
            <button disabled={disabled} className={classNames(S.buttonConjug, S[type], {[S.icon]: icon})} onClick={onClick}>{children}</button>
        </>
    )
}

// S[type] - это conditional стиль. зависит от того, что приходит в пропс type.