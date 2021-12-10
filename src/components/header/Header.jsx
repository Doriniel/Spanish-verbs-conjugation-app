import HeaderStyles from './Header.module.css';

export default function Header() {
    return (
        <header className={HeaderStyles.header}>
            <h1 className={HeaderStyles.title}>ConJugator de los verbos en Español</h1>
            {/* <p>Здесь будет еще какой-то текст в хэдере</p> */}
            {/* Spanish verbs conjugation practice */}
        </header>
    )
}