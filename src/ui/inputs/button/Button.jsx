import S from './Button.module.css';


export default function Button(props) {
    let{children} = props;

    return (
        <>
            <button className={S.buttonConjug}>{children}</button>
        </>
    )
}
