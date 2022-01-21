import css from './styles.module.scss';

const Sidenav: React.FC<{}> = () => {
    return <nav className={css.container}>
        <ul className={css.links}>
            <li className={css.link}>Tasks</li>
            <li className={css.link}>Categories</li>
            <li className={css.link}>Dashboard</li>
        </ul>
    </nav>
}

export default Sidenav;