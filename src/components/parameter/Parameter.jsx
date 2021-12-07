import S from './Parameter.module.css';


export default function Parameter (props) {
    let {paramKey, paramValue = ""} = props;
    return (
        <>
            <div className={S.conjugParams}>
                <p className={S.parameterKey}>{paramKey}</p>
                <p className={S.parameterValue}>   {paramValue}   </p>
            </div>
        </>
    )
}
