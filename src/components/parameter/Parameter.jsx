import S from './Parameter.module.css';


export default function Parameter (props) {
    let {paramKey, paramValue = "", ...rest} = props;
    return (
        <>
            <p className={S.parameterKey} {...rest}>{paramKey}</p>
            <p className={S.parameterValue}>{paramValue}</p>
        </>
    )
}
