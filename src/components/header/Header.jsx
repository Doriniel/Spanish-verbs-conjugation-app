import HeaderStyles from './Header.module.css';

export default function Header() {
    return (
        <header className={HeaderStyles.header}>
            <h1 className={HeaderStyles.title}>Spanish verbs conjugation practice</h1>
            {/* <p>Здесь будет еще какой-то текст в хэдере</p> */}
        </header>
    )
}